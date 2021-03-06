import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './reducers';

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const reducer = combineReducers(allReducers);
const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = composeEnhancers(applyMiddleware(thunk, promise));
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);


export default function configureStore() {
    return { store, persistor };
}
