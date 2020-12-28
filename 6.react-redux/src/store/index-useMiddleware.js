// 使用中间件
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer.js'
import saga from './saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;


// 创建saga中间件对象
const sagaMiddleware = createSagaMiddleware()

const storeMiddleware = applyMiddleware(thunkMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(storeMiddleware))

// 运行saga
sagaMiddleware.run(saga)

export default store