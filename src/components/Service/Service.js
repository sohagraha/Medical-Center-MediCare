import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, img } = props.mainservice;
    return (
        <Col>
            <Card className="card">
                <Card.Img variant="top" src={img} className='w-100 mainCard images' />
                <div className="d-flex justify-content-between m-2 fw-bold">
                    {/* <small className="highlight">{type}</small> <small className="highlight">{level}</small> */}
                </div>
                <h5 className="text-success fw-bolder">{name} Taka</h5>
                <Card.Body className="p-1 pb-2">
                    <Card.Title className="fw-bold p-0">{name}</Card.Title>
                    <hr className="p-1 m-1" />
                    <Card.Text className="text-start">
                        <div className="text-center">
                            {/* <h6><span className="fw-bold">Total Class : </span>{classes}</h6>
                        <h6><span className="fw-bold"><i className="fas fa-clock text-danger"></i> Duration : </span>{duration}:00 Hours</h6>
                        <h6><span className="fw-bold"><i className="fas fa-chalkboard-teacher text-danger"></i> Teacher : </span><span className="text-success">{mentor}</span></h6> */}
                        </div>
                    </Card.Text>
                    <Button className="btn-back">Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Service;