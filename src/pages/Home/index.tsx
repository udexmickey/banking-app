import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={7}>
                Welcome to AceCoinPay... The home for payment
          </Col>
        </Row>
      </Container>
    </div>
  )
}
