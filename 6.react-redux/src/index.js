import store from './store'

import {
  addAction,
} from './store/actionCreators'

store.subscribe(() => {
  console.log(store.getState())
})
// 中间件的实现方式
// 1.基本做法
// console.log('--dispatch前---dispatching action:', addAction(10))
// store.dispatch(addAction(10))
// console.log('--dispatch后---new state:', store.getState())

// 2.封装一个函数
// function dispatchLogging(action) {
//   console.log('--dispatch前---dispatching action:', addAction(10))
//   store.dispatch(action)
//   console.log('--dispatch后---new state:', store.getState()) 
// }
// dispatchLogging(addAction(10))

// 3. 优化封装函数，使用store.dispatch的方式调用
// const next = store.dispatch
// function dispatchLogging(action) {
//   console.log('--dispatch前---dispatching action:', addAction(10))
//   next(action)
//   console.log('--dispatch后---new state:', store.getState()) 
// }
// store.dispatch = dispatchLogging

// store.dispatch(addAction(10))

// 4. 添加thunk
function patchLogging(store) {
  const next = store.dispatch
  function dispatchLogging(action) {
    console.log('--dispatch前---dispatching action:', addAction(10))
    next(action)
    console.log('--dispatch后---new state:', store.getState()) 
  }
  // store.dispatch = dispatchLogging
  return dispatchLogging // 纯函数
} 

function patchThunk(store) {
  const next = store.dispatch
  function dispatchThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  // store.dispatch = dispatchThunk
  return dispatchThunk // 纯函数
}

patchLogging(store)
patchThunk(store)

store.dispatch(addAction(10))

function foo(store, getState) {
  dispatch(addAction(20))
}
store.dispatch(foo)


function applyMiddlewares(...middlewares) {
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

applyMiddlewares(patchLogging, patchThunk)