import React from 'react';
import IntroCard from './IntroCard';
import SignUp from './SignUp';
import CloserCard from './CloserCard';
import Diamonds from './Diamonds';


const ContentSection = (props) => {
  const template = () => {
    switch (props.type) {
      case 'introTitle':
        return (
          <IntroCard card={props.details} />
        );
      case 'signup':
        return (
          <SignUp card={props.details} />
        );
      case 'banner':
        return (
          <CloserCard card={props.details} />
        )
      default:
        return null;
    }
  }
  return (
    <div className="content-section" style={{
      color: props.color,
      backgroundImage: `url(${props.bgImg})`,
      height: props.bgHeight
    }}>
      <Diamonds />
      {template()}
    </div>
  );
};

export default ContentSection;
