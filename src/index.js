import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


//reducer:
import { reducer } from './reducers'

import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));

// console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);


