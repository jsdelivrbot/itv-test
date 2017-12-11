import {FETCH_DATA} from '../actions/index';

export default function (state = [], action){
  switch(action.type){
    case FETCH_DATA:
      //create entirely new array and return it to state
      // return state.concat([action.payload.data]);
      console.log(action);
      return [action.payload.data, ...state];
  }
  return state;
}
