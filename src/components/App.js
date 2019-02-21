
import React from 'react';
import faker from 'faker';
import Header from './Header';
import Main from './Main';
import Features from './Features';
import Tours from './Tours';


class App extends React.Component {
    state={ term: 'Exciting tours for adventurous people', tours: 'Most Popular Tours' }

    render(){
      return (
        <div>
          <Header />
          <Main
            slogan={this.state.term}
            text={faker.lorem.paragraph()}
            />
          <Features 
            text={faker.lorem.paragraph()}
            />
          <Tours 
            slogan={this.state.tours}
            />
        </div>
      )
   }
}

export default App;
