import React from 'react';
import chevron from '../resources/images/chevron.svg';
import flamingo from '../resources/images/flamingo-image.png';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="chevron left"><img src={chevron} alt="Previous" /></div>
      <div className="chevron right"><img src={chevron} alt="Next" /></div>
      <div className="gallery-image">
        <img src={flamingo} alt="Flamingo" />
      </div>
    </div>
  );
};

export default Gallery;
