import type React from "react";
/**
 * Image Distribution Library
 * Utilities for arranging multiple images in various layouts
 */

export type ImageItem = {
	id: string | number;
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	aspectRatio?: number;
};

export type LayoutType =
	| "grid"
	| "masonry"
	| "featured"
	| "pinterest"
	| "mosaic"
	| "carousel"
	| "filmstrip"
	| "collage"
	| "scattered"
	| "polaroid";

export type LayoutOptions = {
	gap?: number;
	maxColumns?: number;
	minColumnWidth?: number;
	aspectRatio?: number;
	fullWidth?: boolean;
	featuredIndex?: number;
	randomize?: boolean;
	maxHeight?: number;
	padding?: number;
	borderRadius?: number;
	overlap?: number;
	rotation?: boolean;
	rotationRange?: [number, number]; // [min, max] in degrees
};

/**
 * Calculate the number of columns based on container width and options
 */
export function calculateColumns(
	containerWidth: number,
	options: LayoutOptions = {}
): number {
	const { maxColumns = 12, minColumnWidth = 250 } = options;
	const calculatedColumns = Math.floor(containerWidth / minColumnWidth);
	return Math.min(Math.max(1, calculatedColumns), maxColumns);
}

/**
 * Distribute images into a standard grid layout
 */
export function gridLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { items: ImageItem[]; layout: { columns: number; rows: number } } {
	const columns = calculateColumns(containerWidth, options);
	const rows = Math.ceil(images.length / columns);

	return {
		items: images,
		layout: {
			columns,
			rows,
		},
	};
}

/**
 * Distribute images into a masonry layout with variable heights
 */
export function masonryLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { items: ImageItem[]; columns: ImageItem[][] } {
	const numColumns = calculateColumns(containerWidth, options);
	const columns: ImageItem[][] = Array.from({ length: numColumns }, () => []);

	// Calculate column heights to track the shortest column
	const columnHeights = Array(numColumns).fill(0);

	// Distribute images to the shortest column
	images.forEach((image) => {
		const shortestColumnIndex = columnHeights.indexOf(
			Math.min(...columnHeights)
		);
		columns[shortestColumnIndex].push(image);

		// Update column height
		const aspectRatio =
			image.aspectRatio ||
			(image.width && image.height ? image.width / image.height : 1);
		columnHeights[shortestColumnIndex] += 1 / aspectRatio;
	});

	return {
		items: images,
		columns,
	};
}

/**
 * Create a featured layout with one large image and others smaller
 */
export function featuredLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { featured: ImageItem | null; regular: ImageItem[] } {
	if (images.length === 0) {
		return { featured: null, regular: [] };
	}

	const { featuredIndex = 0 } = options;
	const safeIndex = Math.min(Math.max(0, featuredIndex), images.length - 1);

	const featured = images[safeIndex];
	const regular = images.filter((_, index) => index !== safeIndex);

	return {
		featured,
		regular,
	};
}

/**
 * Create a Pinterest-style layout with variable heights and widths
 */
export function pinterestLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { items: ImageItem[]; columns: ImageItem[][] } {
	const numColumns = calculateColumns(containerWidth, options);
	const columns: ImageItem[][] = Array.from({ length: numColumns }, () => []);

	// Distribute images evenly across columns
	images.forEach((image, index) => {
		const columnIndex = index % numColumns;
		columns[columnIndex].push(image);
	});

	return {
		items: images,
		columns,
	};
}

/**
 * Create a mosaic layout with varying image sizes
 */
export function mosaicLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { items: ImageItem[]; grid: (ImageItem | null)[][] } {
	const columns = calculateColumns(containerWidth, options);
	const rows = Math.ceil(images.length / (columns - 1)); // We'll have some larger cells

	// Create a grid with null placeholders
	const grid: (ImageItem | null)[][] = Array.from({ length: rows }, () =>
		Array.from({ length: columns }, () => null)
	);

	let imageIndex = 0;
	let largeCell = 0; // Track which cell should be larger (2x2)

	// Fill the grid
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			// Skip cells that would be part of a large cell
			if (grid[row][col] === null && imageIndex < images.length) {
				// Decide if this should be a large cell
				if (
					(row * columns + col) % 5 === largeCell &&
					row + 1 < rows &&
					col + 1 < columns
				) {
					// This is a 2x2 cell
					grid[row][col] = images[imageIndex];
					grid[row][col + 1] = null; // Mark as used
					grid[row + 1][col] = null; // Mark as used
					grid[row + 1][col + 1] = null; // Mark as used

					// Move to next large cell position
					largeCell = (largeCell + 1) % 5;
				} else {
					// Regular 1x1 cell
					grid[row][col] = images[imageIndex];
				}

				imageIndex++;
			}
		}
	}

	return {
		items: images,
		grid,
	};
}

/**
 * Create a carousel layout for horizontal scrolling
 */
export function carouselLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { items: ImageItem[]; itemWidth: number } {
	const { gap = 16, minColumnWidth = 300 } = options;
	const itemsPerView = Math.floor(containerWidth / (minColumnWidth + gap));
	const itemWidth = (containerWidth - gap * (itemsPerView - 1)) / itemsPerView;

	return {
		items: images,
		itemWidth,
	};
}

/**
 * Create a filmstrip layout with uniform height
 */
export function filmstripLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): { items: ImageItem[]; height: number } {
	const { maxHeight = 200, gap = 8 } = options;

	return {
		items: images,
		height: maxHeight,
	};
}

/**
 * Create a collage layout with overlapping images
 */
export function collageLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): {
	items: ImageItem[];
	positions: { x: number; y: number; z: number; scale: number }[];
} {
	const { overlap = 20, padding = 40 } = options;
	const maxImages = Math.min(images.length, 10); // Limit to 10 images for performance

	const positions = [];
	const usableWidth = containerWidth - padding * 2;
	const centerX = containerWidth / 2;
	const centerY = 300; // Arbitrary center point

	// Calculate positions in a circular/scattered pattern
	for (let i = 0; i < maxImages; i++) {
		const angle = (i / maxImages) * Math.PI * 2;
		const distance = Math.random() * (usableWidth / 3) + usableWidth / 6;
		const x = centerX + Math.cos(angle) * distance;
		const y = centerY + Math.sin(angle) * distance;
		const z = i; // z-index
		const scale = 0.7 + Math.random() * 0.5; // Random scale between 0.7 and 1.2

		positions.push({ x, y, z, scale });
	}

	return {
		items: images.slice(0, maxImages),
		positions,
	};
}

/**
 * Create a scattered layout with random positions
 */
export function scatteredLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): {
	items: ImageItem[];
	positions: { x: number; y: number; z: number; rotation: number }[];
} {
	const { padding = 40, rotationRange = [-15, 15] } = options;
	const maxImages = Math.min(images.length, 10); // Limit to 10 images for performance

	const positions = [];
	const usableWidth = containerWidth - padding * 2;
	const usableHeight = 500; // Arbitrary container height

	// Calculate random positions
	for (let i = 0; i < maxImages; i++) {
		const x = padding + Math.random() * usableWidth;
		const y = padding + Math.random() * usableHeight;
		const z = Math.floor(Math.random() * maxImages); // Random z-index
		const rotation =
			rotationRange[0] + Math.random() * (rotationRange[1] - rotationRange[0]);

		positions.push({ x, y, z, rotation });
	}

	return {
		items: images.slice(0, maxImages),
		positions,
	};
}

/**
 * Create a polaroid-style layout
 */
export function polaroidLayout(
	images: ImageItem[],
	containerWidth: number,
	options: LayoutOptions = {}
): {
	items: ImageItem[];
	positions: { x: number; y: number; z: number; rotation: number }[];
} {
	const { padding = 40, rotationRange = [-8, 8] } = options;
	const maxImages = Math.min(images.length, 10); // Limit to 10 images for performance

	const positions = [];
	const usableWidth = containerWidth - padding * 2;

	// Calculate positions in a grid-like pattern with slight randomness
	const columns = Math.min(4, maxImages);
	const itemWidth = usableWidth / columns;

	for (let i = 0; i < maxImages; i++) {
		const col = i % columns;
		const row = Math.floor(i / columns);

		// Base position
		let x = padding + col * itemWidth + itemWidth / 2;
		let y = padding + row * (itemWidth * 1.2) + itemWidth / 2;

		// Add slight randomness
		x += (Math.random() - 0.5) * 30;
		y += (Math.random() - 0.5) * 30;

		const z = i;
		const rotation =
			rotationRange[0] + Math.random() * (rotationRange[1] - rotationRange[0]);

		positions.push({ x, y, z, rotation });
	}

	return {
		items: images.slice(0, maxImages),
		positions,
	};
}

/**
 * Main function to distribute images based on the selected layout
 */
export function distributeImages(
	images: ImageItem[],
	containerWidth: number,
	layout: LayoutType = "grid",
	options: LayoutOptions = {}
) {
	switch (layout) {
		case "grid":
			return gridLayout(images, containerWidth, options);
		case "masonry":
			return masonryLayout(images, containerWidth, options);
		case "featured":
			return featuredLayout(images, containerWidth, options);
		case "pinterest":
			return pinterestLayout(images, containerWidth, options);
		case "mosaic":
			return mosaicLayout(images, containerWidth, options);
		case "carousel":
			return carouselLayout(images, containerWidth, options);
		case "filmstrip":
			return filmstripLayout(images, containerWidth, options);
		case "collage":
			return collageLayout(images, containerWidth, options);
		case "scattered":
			return scatteredLayout(images, containerWidth, options);
		case "polaroid":
			return polaroidLayout(images, containerWidth, options);
		default:
			return gridLayout(images, containerWidth, options);
	}
}

/**
 * Helper function to generate CSS for image positioning
 */
export function getImageStyles(
	layout: LayoutType,
	item: any,
	index: number,
	options: LayoutOptions = {}
): React.CSSProperties {
	const { borderRadius = 8, padding = 0 } = options;

	const baseStyles: React.CSSProperties = {
		borderRadius,
		padding,
		objectFit: "cover",
	};

	switch (layout) {
		case "collage":
		case "scattered":
		case "polaroid":
			if (item.positions && item.positions[index]) {
				const pos = item.positions[index];
				return {
					...baseStyles,
					position: "absolute",
					left: `${pos.x}px`,
					top: `${pos.y}px`,
					zIndex: pos.z,
					transform: `rotate(${pos.rotation || 0}deg) scale(${pos.scale || 1})`,
					transformOrigin: "center",
					boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
				};
			}
			break;

		case "featured":
			if (index === 0) {
				return {
					...baseStyles,
					gridColumn: "span 2",
					gridRow: "span 2",
				};
			}
			break;

		case "mosaic":
			// Handled by the grid layout
			break;
	}

	return baseStyles;
}

/**
 * Helper function to generate container styles
 */
export function getContainerStyles(
	layout: LayoutType,
	options: LayoutOptions = {}
): React.CSSProperties {
	const { gap = 16 } = options;

	const baseStyles: React.CSSProperties = {
		display: "grid",
		gap: `${gap}px`,
	};

	switch (layout) {
		case "grid":
			return {
				...baseStyles,
				gridTemplateColumns: `repeat(auto-fill, minmax(${
					options.minColumnWidth || 250
				}px, 1fr))`,
			};

		case "masonry":
			return {
				...baseStyles,
				columnCount: options.maxColumns || 3,
				columnGap: `${gap}px`,
			};

		case "featured":
			return {
				...baseStyles,
				gridTemplateColumns: "repeat(3, 1fr)",
				gridAutoRows: "minmax(200px, auto)",
			};

		case "carousel":
			return {
				display: "flex",
				gap: `${gap}px`,
				overflowX: "auto",
				scrollSnapType: "x mandatory",
				WebkitOverflowScrolling: "touch",
			};

		case "filmstrip":
			return {
				display: "flex",
				gap: `${gap}px`,
				overflowX: "auto",
				height: `${options.maxHeight || 200}px`,
			};

		case "collage":
		case "scattered":
		case "polaroid":
			return {
				position: "relative",
				height: "600px", // Fixed height for these layouts
				width: "100%",
			};

		default:
			return baseStyles;
	}
}
