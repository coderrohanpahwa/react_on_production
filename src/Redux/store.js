import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxLogger from 'redux-logger';
import rootReducer from './rootReducer'
import { persistStore,persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

// export const store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(reduxLogger,thunk)
//     // other store enhancers if any
//   ));

// export const persistor = persistStore(store);

// export default {store, persistor}; 

const persistConfig = {
  key: 'root',
  debug: true,
  storage, 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer,applyMiddleware(thunk));

// const persistor = persistStore(store);

export const store = createStore(persistedReducer,applyMiddleware(thunk,reduxLogger));
export const persistor = persistStore(store);