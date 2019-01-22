import React from 'react';

const TeaserText = ({text, specialClass}) => {
  return (
    <div className={`teaser ${specialClass ? specialClass : ''}`}>
      {text}
    </div>
  );
};

export default TeaserText;
