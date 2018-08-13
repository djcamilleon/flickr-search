import React, { Component } from 'react';
import './App.css';

import SearchContainer from './components/SearchContainer'
import ResultsContainer from './components/ResultsContainer'
import CurrentImageContainer from './components/CurrentImageContainer'
import { Route } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      criteria: '',
      searchResults: [],
      currentImage: {},
      isLoaded: false
    }
  }

  changeState = (field, value) => this.setState({[field]: value})

  componentDidMount = () => {

  }

  render() {
    return (
      <div className="App">

        <Route
          exact 
          path='/'
          render={(renderProps) => 

            <SearchContainer 
              {...renderProps}
              criteria={this.state.criteria} 
              changeState={this.changeState}/>
          }
        />

        <Route
          exact 
          path='/results'
          render={(renderProps) => 

            <ResultsContainer 
              {...renderProps}
              criteria={this.state.criteria} 
              searchResults={this.state.searchResults} 
              changeState={this.changeState}
            />
          }
        />        

        <Route
          exact 
          path='/image'
          render={(renderProps) => 

            <CurrentImageContainer
                {...renderProps}
                currentImage={this.state.currentImage}
            />
          }
        />
        
      </div>
    );
  }
}

export default App;
