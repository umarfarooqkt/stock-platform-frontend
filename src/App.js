import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
import Layout from './components/Layout';
import { setupToken } from './service/auth';

const app = (renderTo) => {
    const { store, persistor } = configureStore();
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
                onBeforeLift={() => {
                    setupToken(store);
                }}
            >
                <Layout />
            </PersistGate>
        </Provider>, renderTo,
    );
};

export default app;
