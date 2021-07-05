import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

//Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'

//Redux configure
const reducer = combineReducers({
  auth:authReducer,
  bugs:bugReducer,
  user:userReducer,
})

const store = configureStore({
  reducer   //automtically set to root
})

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    
  document.getElementById('root')
);
