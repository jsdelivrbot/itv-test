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
    this.props.fetchCategory(this.state.selection);
  }

  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className="input-group">
        <div className="form-group page">
          <select
            className="form-control"
            id="per-page"
            value={this.state.selection}
            onChange={this.handleChange}
            placeholder="select category"
          >
            <option value="">Select category</option>
            <option>Children</option>
            <option>Comedy</option>
            <option value="Drama+%26+Soaps">Drama & Soaps</option>
            <option>Entertainment</option>
            <option>Factual</option>
            <option>Films</option>
            <option>News</option>
            <option>Sport</option>
          </select>
        </div>

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
