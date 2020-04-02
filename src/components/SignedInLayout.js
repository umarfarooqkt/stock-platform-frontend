import React from 'react';
import * as PropTypes from 'prop-types';
import {
    Button, Nav, Navbar, NavItem, NavLink
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAuthEnabled } from '../service/auth';
import { gotoLoginPage } from '../service';


const SignedInLayout = ({ children, onPurgeAuth }) => (
    <div>
        <Navbar bg="light" expand="sm">
            <Link to="/">
                <Navbar.Brand>
                    Stock Platform
                </Navbar.Brand>
            </Link>

            <Nav>
                <NavItem>
                    <NavLink>
                        <Link to={'/stocks'}>Stocks</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to={'/portfolio'}>Portfolio</Link>
                    </NavLink>
                </NavItem>
            </Nav>

            <Nav className="ml-auto">
                <NavItem>
                    <NavLink>
                        <Link to={'/registry'}>Service Registry</Link>
                    </NavLink>
                </NavItem>
                <Button onClick={() => {
                    onPurgeAuth();
                    if (isAuthEnabled()) {
                        gotoLoginPage();
                    }
                }}
                >
                    Logout
                </Button>
            </Nav>
        </Navbar>
        {children}
    </div>
);

SignedInLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    onPurgeAuth: PropTypes.func.isRequired,
};

export default SignedInLayout;
