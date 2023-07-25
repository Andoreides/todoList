import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer} from './store/reducers';
import {Provider} from "react-redux";
import {loginReducer} from "./store/loginReducer";
import {userReducer} from "./store/userReducer";
import {BrowserRouter} from 'react-router-dom';
import {postReducer} from "./store/postReducer";
import {carsReducer} from "./store/carsReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {countWatcher} from "./saga/saga";
import {sagaReducer} from "./saga/sagaReducer";


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({loginState: loginReducer, todosState: reducer, userState: userReducer, postState : postReducer, carsState: carsReducer, });
let store = createStore(sagaReducer, applyMiddleware(sagaMiddleware));
// console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>

      </Provider>

  </React.StrictMode>
);
sagaMiddleware.run(countWatcher);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
