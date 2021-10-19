import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, id, desc } = props.mainservice;
    return (
        <Col>
            <Card className="card service p-2">
                <Card.Img variant="top" src={img} className='w-100 mainCard images p-1' />
                <Card.Body className="p-1 p-2">
                    <Card.Title className="fw-bold p-0">{name}</Card.Title>
                    <hr className="p-1 m-1" />
                    <p className="text-start">{desc}</p>
                    <Link to={`/details/${id}`}><button className="btn btn-primary btn-back">Details <i className="fas fa-info-circle"></i></button></Link>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Service;