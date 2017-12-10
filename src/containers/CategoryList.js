import React, {Component} from 'react';
import {connect} from 'react-redux';

class CategoryList extends Component {

  renderCategory(categoryData, index){
    const {programmes} = categoryData._embedded;

    return(
      <div key={index}>
        {programmes.map((item, i) =>{
          return(
            <article key={i}>
              <h1>{item.title}</h1>
            </article>
          );
        })}
      </div>
    );
  }

  render(){
    // console.log('categories ==>', this.props.category);
    return(
      <section>
        {this.props.category.map(this.renderCategory)}
      </section>
    );
  }
}

function mapStateToProps({category}){
  return {category}; //{category: category} === {category}
}

export default connect(mapStateToProps)(CategoryList);
