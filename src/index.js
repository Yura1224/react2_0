import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const initialState = {
    counter: {
        value: 0
    },
    posts: [],
    comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }

        case 'DEC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value - 1
                }
            }
        }

        case 'ADD_POSTS': {
            return {
                ...state,
                posts: action.payload
            }
        }

        case 'ADD_COMMENTS': {
            return {
                ...state,
                comments: action.payload
            }
        }

        default:
            return state;
    }
    }

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
