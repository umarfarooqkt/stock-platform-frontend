import React from 'react';
import * as PropTypes from 'prop-types';
import {
    Button, Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAuthEnabled } from '../service/auth';
import { gotoLoginPage } from '../service';


const SignedInLayout = ({ children, onPurgeAuth }) => (
    <div>
        <Navbar bg="light" expand="sm">
            <Link to="/">
                <Navbar.Brand>
                    <img
                        className="brand-image"
                        alt="Logo"
                        src="/stonks.svg"
                        width="100"
                        height="100"
                    />
                </Navbar.Brand>
            </Link>
            <Nav>
                nav items go here
            </Nav>
            <Nav className="ml-auto">
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
