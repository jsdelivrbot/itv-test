import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import CategoryList from '../containers/CategoryList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <main>
        <img src="../../ITV_logo_2013.svg.png" alt="itv icon" />
        <SearchBar />
        <CategoryList/>
      </main>
    );
  }
}
