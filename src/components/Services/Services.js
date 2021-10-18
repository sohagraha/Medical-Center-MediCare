import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='pb-5'>
            <h1 className="pt-3 fw-bold">Our Top Rated Services</h1>
            {/* Pass the data to another component using map  */}
            <Row xs={1} md={4} className="g-4 m-2">
                {
                    services.map(mainservice => <Service mainservice={mainservice} key={mainservice.id}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;