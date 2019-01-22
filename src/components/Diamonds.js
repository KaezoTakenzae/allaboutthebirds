import React, {Component} from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Diamonds extends Component {
  state = {
    diamonds: [{
      size: 50,
      left: 100,
      rotate: 315,
      top: 200,
      delay: 100,
    },
    {
      size: 100,
      left: 700,
      rotate: 315,
      top: 50,
      delay: 200,
    },
    {
      size: 150,
      left: 1100,
      rotate: 315,
      top: window.innerHeight - 300,
      delay: 300,
    }
  ]
  }

  showDiamonds = () => (
    this.state.diamonds.map((diamond, i) => (
      <Animate
          key={i}
          show={true}
          start={{
            left: 1000,
            rotate: 0,
            top: 1000,
          }}
          enter={{
            left: [diamond.left],
            rotate: [diamond.rotate],
            top: [diamond.top],
            timing: {
              delay: [diamond.delay],
              duration: 2000,
              ease: easePolyOut,
            }
          }}
      >
        {({
          top,
          rotate,
          left,
        }) => {
            return (
              <div
                className="diamond"
                style={{
                  width: `${diamond.size}px`,
                  height: `${diamond.size}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                  transform: `rotate(${rotate}deg)`
                }}
              ></div>
            )
        }}
      </Animate>
    ))
  )

  render() {
    return (
      <div>
        {this.showDiamonds()}
      </div>
    );
  }
}

export default Diamonds;
