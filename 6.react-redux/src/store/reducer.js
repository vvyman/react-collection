
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants.js'

const defaultState = {
  counter: 0
}

const reducer = (state = defaultState, action) => {
 switch (action.type) {
  case ADD_NUMBER:
    return {...state, counter: state.counter + action.num}
  case SUB_NUMBER:
    return {...state, counter: state.counter - action.num}
  case INCREMENT:
    return {...state, counter: state.counter + 1}
  case DECREMENT:
    return {...state, counter: state.counter - 1}
  case CHANGE_BANNER:
    return {...state, banner: action.banner}
  case CHANGE_RECOMMEND:
    return {...state, recommend: action.recommend}
  default:
    return state
 }
}


export default reducer