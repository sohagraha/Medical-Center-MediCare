import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { user, signInUsingGoogle, logOut, signInWithPassword, logInWithPassword, error } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState("");
    const [isNotLogin, setIsNotlogin] = useState(false);
    // const location = useLocation();
    // const history = useHistory();
    const toggleLogin = e => {
        setIsNotlogin(e.target.checked);
    }
    const handelEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value);
    }
    const handelRegistration = e => {
        e.preventDefault();
        setErrormsg("");
        if (password.length < 6) {
            setErrormsg("Password muse be 6 character or more! ");
            return;
        }
        console.log(email, password);
        signInWithPassword(email, password);

    }

    const handelLogin = e => {
        e.preventDefault();
        setErrormsg("");
        if (password.length < 6) {
            setErrormsg("Password should be 6 character ");
            return;
        }
        console.log(email, password);
        logInWithPassword(email, password);

    }

    return (
        // Log In Form 
        <>
            {user?.email ?
                <button className="btn btn-primary m-3" onClick={logOut}>Log Out</button> :
                <div>
                    <div>
                        <h2 className="fw-bold p-2 my-4 bg-secondary text-white w-75 mx-auto">{isNotLogin ? "Registration First" : "Loging Now"}</h2>
                        <Form className="w-75 mx-auto mt-5">
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <h5 className="text-danger"> {error} </h5>
                                <h5 className="text-danger"> {errormsg} </h5>
                                <Col className="mx-auto" sm={12} md={8}>
                                    <Form.Control onBlur={handelEmailChange} type="email" placeholder="Email" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Col className="mx-auto" sm={12} md={8}>
                                    <Form.Control onBlur={handelPasswordChange} type="password" placeholder="Password" required />
                                </Col>
                            </Form.Group>

                            <Form.Group onChange={toggleLogin} as={Row} className="mb-3 mx-auto" controlId="formHorizontalCheck">
                                <Col sm={{ span: 2, offset: 2 }}>
                                    <Form.Check label="New_User" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="my-3">
                                <Col sm={{ span: 8, offset: 2 }}>
                                    {
                                        isNotLogin ? <Button onClick={handelRegistration}>Register</Button> : <Button onClick={handelLogin}>Login</Button>}
                                </Col>
                            </Form.Group>
                        </Form>

                    </div>
                    <h6>-----OR-----</h6>
                    {/* Sign in using google  */}
                    <button className="btn btn-danger m-3" onClick={signInUsingGoogle}>Sign In with google <i className="fab fa-google"></i></button>
                </div>
            }

        </>
    );
};

export default Login;