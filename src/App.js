import React, { Component } from 'react';
import ContentSection from './components/ContentSection';

import parrots from './resources/images/parrots.png';
import feathers from './resources/images/feathers.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentSection
            type='introTitle'
            color='#FFF'
            bgImg={parrots}
            bgHeight={`${window.innerHeight}px`}
            details={{
              title: 'This reserve enables the development of various species of endangered birds throughout south east asia',
              teaser: 'A warm welcome',
            }}
        />
        <ContentSection
            type='signup'
            bgHeight={`${window.innerHeight}px`}
            details={{
              title: 'Become a guardian of wildlife and gain access to exclusive content, news and releases.',
              teaser: 'Thirsty for more?',
              specialClass: 'dark',
            }}
        />
        <ContentSection
            type='banner'
            bgImg={feathers}
            bgHeight={`${window.innerHeight}px`}
            details={{
              title: 'Together we can give nature the home it needs',
              subtext: `Our record of success suggests we are doing many of the right things in the right way. But we
                        take nothing for granted. Conservation is rarely straightforward and is becoming ever more
                        demandiing. Find out what we're doing and how we're doing it.`
            }}
        />
      </div>
    );
  }
}

export default App;
