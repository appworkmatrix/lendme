import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './auth.css';

class SignIn extends Component {
  render() {
    return(
      <section className="sign-in-wrapper">
        <Container>
          <Row>
            <Col sm="12" md={{size: 4, offset: 4}}>
              <Card>
                <CardBody>
                  <CardTitle>Sign In</CardTitle>
                  <CardSubtitle className="text-muted">Dream It. Get It.</CardSubtitle>
                  <br />
                  <CardText className="text-warning">This page is for members-only.</CardText>
                  <form>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" name="uname" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" />
                    </div>
                  </form>
                  <Button className="btn-block" color="primary">Sign In</Button>
                  <br/>
                  <p className="small">Don't have an account yet? Register <a href="/signup/">here</a>.</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { SignIn }