import React from 'react';
import TeaserText from './TeaserText';

const IntroCard = ({ card }) => {
  return (
    <div className="center-text">
      <TeaserText text={card.teaser} />
      <h1>
        {card.title}
      </h1>
    </div>
  );
};

export default IntroCard;
