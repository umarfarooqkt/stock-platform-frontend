import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from '../containers/SignedInLayout';
import Registry from './Registry/Registry';
import Portfolio from './Portfolio';
import Stocks from './Stocks';
import StockInfo from './StockInfo';

const Layout = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignedInLayout>
                        <p>
                            Welcome!
                        </p>
                        <p>
                            <img
                                className="brand-image"
                                alt="Logo"
                                src="/stonks.svg"
                                width="100"
                                height="100"
                            />
                        </p>
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
                <Route path="/stock/:symbol" exact>
                    <SignedInLayout>
                        <StockInfo/>
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
