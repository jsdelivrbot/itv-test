import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


class CategoryList extends Component {

  renderCategory(categoryData, index){

    // const {programmes} = categoryData._embedded;

    return(
      <div key={index}>
        {
          categoryData._embedded.programmes.map((item, i) =>{

            const {_links, duration, guidance, _embedded, broadcastDateTime } = item._embedded.latestProduction;

            const broadcastTime = moment(broadcastDateTime.commissioning).format('Do MMM YYYY [at] h:mm a');

            return(
              <article key={i} className="row">
                <img className="col-4" src={_links.image.href} />
                <div className="col-8">
                  <h2>{item.title}</h2>
                  <h5>{item.synopses.ninety}</h5>
                  <p>Broadcast time: {broadcastTime} - {duration.display} runtime</p>
                  <p>{guidance}</p>
                  <h4>{_embedded.channel.name} - {_embedded.channel.strapline}</h4>
                </div>
              </article>);

          })
        }
      </div>
    );
  }

  render(){

    return(
      <section>
        {this.props.category.map(this.renderCategory)}
      </section>);

  }
}

function mapStateToProps({category}){
  return {category};
}

export default connect(mapStateToProps)(CategoryList);
