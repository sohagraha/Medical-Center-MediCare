import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fs-6 fw-normal" >
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/home" > <img className="brand" src="https://pngimage.net/wp-content/uploads/2018/05/clinic-symbol-png-5.png" alt="" /> Medi Care</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link as={HashLink} to="/home" className="nav-link bg active">Home</Link>
                            <Link as={HashLink} className="nav-link text-white bg" to="/services">Services</Link>
                            <Link as={HashLink} className="nav-link bg text-white" to="/specialist">Our Specialist</Link>
                            <Link as={HashLink} className="nav-link bg text-white" to="/contact">Contact</Link>
                            <span className="d-flex justify-content-start">
                                {user?.email ?
                                    <>
                                        <Link className="nav-link" to="home"><i class="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-danger ms-2 p-2 bg" onClick={logOut}> <i class="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                    </> :
                                    <Link className="nav-link text-primary mx-auto bg" to="login">Login</Link>
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