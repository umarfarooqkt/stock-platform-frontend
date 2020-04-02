import React from 'react';
import * as PropTypes from 'prop-types';
import {
    Button, Nav, Navbar, NavItem
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAuthEnabled } from '../service/auth';
import { gotoLoginPage } from '../service';

const navItemStyle = {
    margin: '10px'
};

const SignedInLayout = ({ children, onPurgeAuth }) => (
    <div>
        <Navbar bg="light" expand="sm">
            <Link to="/">
                <Navbar.Brand>
                    Stock Platform
                </Navbar.Brand>
            </Link>

            <Nav>
                <NavItem style={navItemStyle}>
                        <Link to={'/stocks'}>Stocks</Link>
                </NavItem>
                <NavItem style={navItemStyle}>
                        <Link to={'/portfolio'}>Portfolio</Link>
                </NavItem>
            </Nav>

            <Nav className="ml-auto">
                <NavItem style={navItemStyle}>
                    <Link to={'/registry'}>Service Registry</Link>
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
        <div style={{ margin: '15px' }}>
            {children}
        </div>
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
