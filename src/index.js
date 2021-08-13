import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore);

// const render = () => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())}>
      {/* <div> */}
        <App />
      {/* </div> */}
    </Provider>
    ,
    document.getElementById('root'));
//   )
// };
// 
// render();