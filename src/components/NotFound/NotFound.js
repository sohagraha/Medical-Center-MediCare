import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
            <br />
            <Link to="/"><button className="btn btn-success m-2"><i className="fas fa-home"></i> Home</button></Link>
        </div>
    );
};

export default NotFound;