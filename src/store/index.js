import { createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
// import mySaga from './sagas'
//
// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//     reducer,
//     applyMiddleware(sagaMiddleware)
// )
//
// // then run the saga
// sagaMiddleware.run(mySaga)


// const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//
// const enhancer = composeEnhancers();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//store是唯一的
//只有store才能改变store里的内容
//reducer必须是纯函数
export default store;
