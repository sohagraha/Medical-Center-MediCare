import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " stiky="top">
                <div className="container-fluid">
                    <Nav className="navbar-brand" href="#">Navbar</Nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link as={HashLink} to="/home" className="nav-link active">Home</Link>
                            <Link className="nav-link" to="services">Features</Link>
                            <span className="d-flex justify-content-start">
                                {user?.email ?
                                    <>
                                        <Link className="nav-link" to="home"><i class="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-danger ms-2" onClick={logOut}> <i class="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                    </> :
                                    <Link className="nav-link text-primary mx-auto" to="login">Login</Link>
                                }
                            </span>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;