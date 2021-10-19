import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="pb-2 containers ">
            <div className="container pt-4">
                <div className="container  pt-3 pb-4 mt-3">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="card mb-5 border-0">
                        <div className="row g-0 p-3">
                            <div className="col-md-6 ps-2 pe-3 pad-right">
                                <div className="mb-3 mt-3">
                                    {/* Name Field - Customer give their name here */}
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Name"
                                        />
                                    </InputGroup>
                                </div>
                                {/* Email Field - Customer give their mail here */}
                                <div className="mb-3">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Email"
                                        />
                                    </InputGroup>
                                </div>
                                {/* Message Field - Customer write their Message here */}
                                <div className="mb-2">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                                        rows="6"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary ps-5 pe-5 ">Send</button>
                                <br />
                            </div>
                            <div className="col-md-6 ps-3">
                                <div className="card-body pt-4 text-start fs-5">
                                    {/* Short Discription  */}
                                    <p><b>"Medi Care"</b> Hospital has pioneered in many endeavors and has achieved many breakthrough milestones. Transcatheter Aortic Valve Implant (TAVI) procedure for Aortic Stenosis patients, first of its kind in Bangladesh was conducted in United Hospital Cardiac Centre, which also prides itself with the lone and pioneer iGS 520 Hybrid Cardio-Neuro Cathlab of the country. </p>
                                    {/* Address  */}
                                    <div className="g-5">
                                        <span><i className="fas fa-map-marker-alt text-danger"></i>  H# 184 (8F), Chowdhury parbata
                                            Begum Rokeya Sarani <br />
                                            Mirpur-10, Dhaka.</span>
                                        <br />
                                        <span ><i className="fas fa-phone text-danger"></i> 220-314-1583</span>
                                        <br />
                                        <span><i className="far fa-envelope text-danger"></i> support @medicare.com</span>
                                    </div>
                                    {/* Social Icon Here  */}
                                    <div className="contacts g-5 fs-2 text-secondary fw-bold">
                                        <i className="fab fa-facebook-f p-3"></i>
                                        <i className="fab fa-twitter p-3"></i>
                                        <i className="fab fa-google-plus-g p-3"></i>
                                        <i className="fab fa-linkedin-in p-3"></i>
                                        <i className="fab fa-youtube p-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;