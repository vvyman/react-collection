const redux = require('redux')

const initialState = {
  counter: 0
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    case 'ADD_NUMBER':
      return {...state, counter: state.counter += action.num}
    default:
      return state
  }
}
// store
const store = redux.createStore(reducer);

// actions
const action1 = {type: 'INCREMENT'}
const action2 = {type: 'DECREMENT'}
const action3 = {type: 'ADD_NUMBER', num: 999}

// subscribe
// 订阅函数
store.subscribe(() => {
  console.log('state change: counter: ' + store.getState().counter)  
})

// dispatch action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)

