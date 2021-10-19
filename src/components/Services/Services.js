import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="container pb-5">
            <h1 className="p-2 fw-bold bg-secondary text-white mt-4">Our Services</h1>
            {/* Pass the data to another component using map  */}
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(mainservice => <Service mainservice={mainservice} key={mainservice.id}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;