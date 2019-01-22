import React from 'react';
import TeaserText from './TeaserText';
import Gallery from './Gallery';

const SignUp = ({ card }) => {
  return (
    <div>
      <div className="two-column-container">
        <div className="left">
          <div className="content">
            <TeaserText text={card.teaser} specialClass={card.specialClass} />
            <h2>{card.title}</h2>
            <form>
              <input type="text" placeholder="Enter your email address" />
              <input type="submit" value="subscribe" />
            </form>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
