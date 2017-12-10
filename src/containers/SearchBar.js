import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCategory} from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      selection: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      selection: e.target.value
    });
  }


  handleSubmit(e){
    e.preventDefault();
    //we need to go and fetch flickr data
    this.props.fetchCategory(this.state.selection);
    this.setState({
      selection: ''
    });
    // console.log('submit', this.state);
  }

  render(){
    const {selection} = this.state;
    return(
      <form
        onSubmit={this.handleSubmit}
        className="input-group">
        <div className="form-group page">
          <label htmlFor="per-page">Television Category</label>
          <select
            className="form-control"
            id="per-page"
            value={selection}
            onChange={this.handleChange}
            placeholder="select category"
          >
            <option>Children</option>
            <option>Comedy</option>
            <option>Drama & Soaps</option>
            <option>Entertainment</option>
            <option>Factual</option>
            <option>Films</option>
            <option>News</option>
            <option>Sport</option>
          </select>
        </div>

        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Search for images"
            className="form-control"
            onChange={this.handleChange}
          />
        </div> */}

        <span className="input-group-btn">
          <button type="submit" className="btn-secondary btn">Search
          </button>
        </span>
      </form>

    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCategory}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
