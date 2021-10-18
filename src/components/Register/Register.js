import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { user, signInUsingGoogle, logOut } = useAuth();
    return (
        <>
            {user?.email ?
                <button className="btn btn-primary m-3" onClick={logOut}>Log Out</button> :
                <div>
                    <h1>Register</h1>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <FormControl
                            placeholder="Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <FormControl
                            placeholder="Password"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type="password"
                        />
                    </InputGroup>
                    <button className="btn btn-primary m-3">Register</button>
                    <Link to="login"><button className="btn btn-primary">Already Register</button></Link>
                    <hr className="w-50 mx-auto" />
                    <hr className="w-50 mx-auto" />
                    <button className="btn btn-primary m-3" onClick={signInUsingGoogle}>Sign In with google</button>
                </div>
            }

        </>
    );
};

export default Register;