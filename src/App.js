import React, {Component} from 'react';
import {CardList} from './Components/card-list/card-list';
import {NotFound} from './Components/not-found/not-found';
import {SearchBox} from './Components/search-box/search-box';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({monsters: users}));
  }

  handleSearch = (e) => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1 className='heading'>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleSearch={this.handleSearch}
        />
        {filteredMonsters.length > 0 ? (
          <CardList monsters={filteredMonsters}></CardList>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default App;
