import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from '../containers/SignedInLayout';
import Registry from './Registry/Registry';
import Portfolio from "./Portfolio";

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
                <Route path="/portfolio" exact>
                    <SignedInLayout>
                        <Portfolio/>
                    </SignedInLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);

export default Layout;
