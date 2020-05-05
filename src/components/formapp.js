import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './form.js';

function Form() {
  return (
    <Container>
      <Row>
        <Col md={5}>
          <Register />
        </Col>
      </Row>
    </Container>
  );
}

export default form;
