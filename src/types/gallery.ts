export interface GalleryImage {
  src: string;
  description: string;
  date: Date;
}

export interface GalleryImageWithStringDate {
  src: string;
  description: string;
  date: string;
}

// Format date to a readable string (e.g., "May 15, 2024")
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

// Convert GalleryImage to GalleryImageWithStringDate
export const toLightboxImage = (image: GalleryImage): GalleryImageWithStringDate => ({
  ...image,
  date: formatDate(image.date)
});
