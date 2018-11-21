import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class Dashboard extends Component {
  render() {
    return(
      <section className="main-page-header">
        <Container>
          <Row>
            <Col>
              <h2>Dashboard</h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { Dashboard }