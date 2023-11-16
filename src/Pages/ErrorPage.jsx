import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error= useRouteError();
    const navigate = useNavigate();
    return (
        <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div className='mt-5 text-center'>
                <h1>Oops!</h1>
                <p>sorry, an unexpected error has occured.</p>
                <p>
                    <i>{error.statusText|| error.message}</i>
                </p>
            </div>
            <Button variant='link' onClick={()=>navigate("/",{replace:true})}>Link</Button>
          </Col>
        </Row>
    
      </Container>
    );
}

export default ErrorPage;
