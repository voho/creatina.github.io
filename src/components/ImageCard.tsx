import React from 'react';
import { GalleryImage } from '../types/gallery';
import './ImageCard.css';

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <div className="gallery-item" onClick={onClick}>
    <div className="image-container">
      <img 
        src={`${process.env.PUBLIC_URL}/images/${image.src}`}
        alt={image.description}
        loading="lazy"
      />
    </div>
    <div className="image-info">
      <h3>{image.description}</h3>
      <span className="date">{image.date.getMonth()}/{image.date.getFullYear()}</span>
    </div>
  </div>
);

export default ImageCard; 