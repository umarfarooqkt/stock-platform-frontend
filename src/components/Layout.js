import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from '../containers/SignedInLayout';
import Registry from './Registry/Registry';

import Portfolio from './Portfolio';
import Stocks from './Stocks';

const Layout = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignedInLayout>
                        Welcome!
                    </SignedInLayout>
                </Route>
                <Route path="/registry" exact>
                    <SignedInLayout>
                        <Registry/>
                    </SignedInLayout>
                </Route>
                <Route path="/stocks" exact>
                    <SignedInLayout>
                        <Stocks/>
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
