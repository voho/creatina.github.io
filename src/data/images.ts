import { GalleryImage } from '../types/gallery';

const images: GalleryImage[] = [
  {
    src: 'IMG_6719.jpg',
    description: 'Murder Drones character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_6720.jpg',
    description: 'Murder Drones character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_6721.jpg',
    description: 'Murder Drones character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_6833.jpg',
    description: 'Murder Drones character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_7089.jpg',
    description: 'Murder Drones character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_7264.jpg',
    description: 'Murder Drones character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_8735.jpg',
    description: 'Dandys World character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_8736.jpg',
    description: 'Dandys World character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_8737.jpg',
    description: 'Dandys World character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_8738.jpg',
    description: 'Dandys World character',
    date: new Date('2025-06-16')
  },
  {
    src: 'IMG_8739.jpg',
    description: 'Dandys World character',
    date: new Date('2025-06-16')
  }
];

// sort by date, desc
images.sort((a, b) => b.date.getTime() - a.date.getTime())

export default images; 