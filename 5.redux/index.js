import store from './store/index.js'

import {
  addAction,
  subAction,
  incAction,
  decAction,
} from './store/actionCreators.js'

store.subscribe(() => {
  console.log('state change: counter: ' + store.getState().counter)
})

store.dispatch(addAction(12))
store.dispatch(subAction(3))
store.dispatch(incAction())
store.dispatch(decAction())
