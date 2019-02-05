import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  handleChange= e => {
    this.setState({
      searchfield: e.target.value
    })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox search={this.handleChange}/>
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;
