import React, {Component} from 'react';
import { Column } from "rbx";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Api from '../../api'
import Restaurant from "./restaurante";
import { loadRestaurants } from "../../actions/restaurante_action"; 
 
class ListRestaurantes extends Component {
  componentWillMount() {
    this.props.loadRestaurants();
  }
 
  render() {
    return (
      <div className="restaurants-list">
        <h2 className="title is-size-4">Restaurantes</h2>
 
        <Column.Group multiline gapSize={2}>
          {
            this.props.restaurants.map(restaurant => {
              return <Restaurant {...restaurant}/>
              console.log(restaurant);
            })
            
          }
        </Column.Group>
      </div>
    )
  }
}
 
const mapStateToProps = store => ({
  restaurants: store.restaurantsState.restaurants
});
 
const mapDispatchToProps = dispatch => bindActionCreators({ loadRestaurants }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(ListRestaurantes);