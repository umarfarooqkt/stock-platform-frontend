import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from '../containers/SignedInLayout';
import Registry from './Registry/Registry';

const Layout = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignedInLayout>
                        content goes here
                    </SignedInLayout>
                </Route>
                <Route path="/registry" exact>
                    <SignedInLayout>
                        <Registry/>
                    </SignedInLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);

export default Layout;
