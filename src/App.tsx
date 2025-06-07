import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { GalleryImage } from './types/gallery';
import images from './data/images';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Gallery images={images} />
      <Footer />
    </div>
  );
};

export default App;
