import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


class CategoryList extends Component {
  renderCategory(categoryData, index){
    const {programmes} = categoryData._embedded;

    return(
      <div key={index}>
        {programmes.map((item, i) =>{
          const broadcastDateTime = moment(item._embedded.latestProduction.broadcastDateTime.commissioning).format('Do MMM YYYY [at] h:mm a');
          return(
            <article key={i} className="row">
              <img className="col-4" src={item._embedded.latestProduction._links.image.href} />
              <div className="col-8">
                <h2>{item.title}</h2>
                <p>{item.synopses.ninety}</p>
                <p>Broadcast time: {broadcastDateTime} - {item._embedded.latestProduction.duration.display} runtime</p>
                <p>{item._embedded.latestProduction.guidance}</p>

                <h6>{item._embedded.latestProduction._embedded.channel.name} - {item._embedded.latestProduction._embedded.channel.strapline}</h6>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  render(){
    console.log('categories ==>', this.state);
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
