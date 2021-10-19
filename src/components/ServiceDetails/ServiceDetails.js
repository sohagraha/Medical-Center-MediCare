import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const servicee = services.filter(service => service.id == serviceId)
    return (
        <div className="d-flex justify-content-center">

            <div className="card m-3 w-75" >
                <div className="row g-0">
                    <div className="">
                        <img src={servicee[0]?.img} className="img-fluid rounded-start" style={{ maxWidth: "540px" }} alt="..." />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title bg-warning">{servicee[0]?.name}</h5>
                            {/* <p className="card-text"><b>Specialty</b> : {servicee[0]?.specialty}</p>
                            <p className="card-text"><b>Qualification</b> : <i> {servicee[0]?.Qualification}</i></p> */}
                            <p className="card-text text-start"> {servicee[0]?.description}</p>
                            <Link to="/home"><button className="btn btn-primary">Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;