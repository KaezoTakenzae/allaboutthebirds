import React from 'react';

const CloserCard = ({card}) => {
  return (
    <div className="banner">
      <div className="content">
        <div className="title">
          {card.title}
        </div>
        <div className="subtext">
          {card.subtext}
        </div>
      </div>
    </div>
  );
};

export default CloserCard;
