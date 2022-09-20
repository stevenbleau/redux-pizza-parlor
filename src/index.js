import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App/App';


// NAME REDUCER
const name = (state = '', action) => {
    if (action.type === 'SET_NAME') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}
// ADDRESS REDUCER
const address = (state = '', action) => {
    if (action.type === 'SET_ADDRESS') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}
// CITY REDUCER
const city = (state = '', action) => {
    if (action.type === 'SET_CITY') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}
// ZIP REDUCER
const zip = (state = 0, action) => {
    if (action.type === 'SET_ZIP') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}


// STORE
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            name,
            address,
            city,
            zip,
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
