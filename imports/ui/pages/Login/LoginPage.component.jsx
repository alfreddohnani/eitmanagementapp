import React, { Component } from 'react';

import { LoginForm } from '../../components/LoginForm/LoginForm.component';
import Container from 'react-bootstrap/Container';


export default class LoginPage extends Component {


    render() {

        return (
            <Container className="h-100">
                <LoginForm />
            </Container>
        );
    }
}
