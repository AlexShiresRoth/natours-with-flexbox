
import React from 'react';
import faker from 'faker';
import Header from './Header.js';
import Main from './Main';


class App extends React.Component {
    state={ term: 'Exciting tours for adventurous people' }

    render(){
      return (
        <div>
          <Header />
          <Main
            slogan={this.state.term}
            text={faker.lorem.paragraph()}
            />
        </div>
      )
   }
}

export default App;
