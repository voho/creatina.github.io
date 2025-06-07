import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Lightbox from './Lightbox';
import { GalleryImage, toLightboxImage } from '../types/gallery';
import './Gallery.css';

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <ImageCard 
            key={image.src + index}
            image={image}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {selectedIndex !== null && (
        <Lightbox 
          image={toLightboxImage(images[selectedIndex])}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
          hasNext={selectedIndex < images.length - 1}
          hasPrev={selectedIndex > 0}
        />
      )}
    </>
  );
};

export default Gallery; 