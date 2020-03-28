import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from '../containers/SignedInLayout';

const Layout = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignedInLayout>
                        content goes here
                    </SignedInLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);

export default Layout;
