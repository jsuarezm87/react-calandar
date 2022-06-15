import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';


export const store = configureStore({
    reducer: {
        rootReducer
    },
    middleware: [thunk]
});





// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import { rootReducer } from '../reducers/rootReducer';


// const composeEnhancers = (
//     typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ) || compose;


// export const store = createStore(
//     rootReducer,
//     composeEnhancers( 
//         applyMiddleware(thunk) 
//     )    
// );

