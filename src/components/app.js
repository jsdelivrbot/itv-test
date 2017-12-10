import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import CategoryList from '../containers/CategoryList';

export default class App extends Component {

  render() {
    return (
      <main>
        <SearchBar />
        <CategoryList />
      </main>
    );
  }
}
