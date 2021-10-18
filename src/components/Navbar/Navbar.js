import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Navbar = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" stiky="top">
                <div className="container-fluid">
                    <Nav className="navbar-brand" href="#">Navbar</Nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            <Link className="nav-link" to="services">Features</Link>
                            {user?.email ?
                                <div>
                                    <Link className="nav-link" to="home">{user?.displayName}<span className="text-danger" onClick={logOut}> Log Out</span></Link>
                                </div> :
                                <Link className="nav-link text-primary" to="login">Login</Link>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;