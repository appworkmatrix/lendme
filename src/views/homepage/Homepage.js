import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Homepage extends Component {
  render() {
    return(
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Home Page</h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { Homepage }