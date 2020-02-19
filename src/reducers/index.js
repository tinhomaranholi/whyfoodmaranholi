import { combineReducers } from "redux";
import RestauranteReducer from "./restauranteReducer";
 
export default combineReducers({
  restaurantsState: RestauranteReducer	
})