import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import UncontrolledLottie from "../UncontrolledLottie";
import "../LoginCard/LoginCard.css";

function LoginComponent(props) {

    return (
        <Container className="containBox">
            <Row>
                <Col className="loginBox">
                
                <UncontrolledLottie />
                
                <Form className="loginForm">
                    <Form.Text className="welcomeMessage">
                        Welcome to the Circuit Ninjas Panel Database. Please enter your credentials to continue.
                    </Form.Text>
                    <Form.Group className="inputFields">
                        <Form.Label>Enter Username</Form.Label>
                        <Form.Control type="name" placeholder="Username" />
                        <Form.Label className="passwordEnter">Enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="loginButton" block>
                        LOGIN
                    </Button>
                </Form>

                </Col>
            </Row>
        </Container>
    )
};

export default LoginComponent;