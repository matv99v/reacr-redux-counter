import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux'; // 3 import store
import { Provider } from 'react-redux' // 4 import store provider

function reducer(state = {count: 0}, action) { // 4 create reducer
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}


const store = createStore(reducer); // 3 create store, 4 // pass reducer to createStore


const App = () => ( // 3 feed store to Provider
    <Provider store={store} >
        <Counter />
    </Provider>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
