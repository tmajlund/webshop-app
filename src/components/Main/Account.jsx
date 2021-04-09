import React, { useEffect, useRef, useState } from 'react';
import { useWebshop } from '../../contexts/WebshopContext';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Account() {
    const { user } = useWebshop();
    const refEmail = useRef();
    const refPassword = useRef();
    const refAddress = useRef();
    const refPhone = useRef();

    useEffect(() => {

    }, [])

    return(
        <Container className="pt-4 create-user-outer" style={{ maxWidth: "20%", minWidth: "300px" }}>
            <h4 className="h4-account">Kontouppgifter</h4>
            <Form className="account-form">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text"
                        /* placeholder="Ange email" */
                        defaultValue={user.email}
                        ref={refEmail}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Lösenord</Form.Label>
                    <Form.Control 
                        type="text"
                        /* placeholder="Ange lösenord" */
                        defaultValue={user.password}
                        ref={refPassword}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Adress</Form.Label>
                    <Form.Control 
                        type="text"
                        /* placeholder="Ange adress" */
                        defaultValue={user.address}
                        ref={refAddress}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control 
                        type="text"
                        /* placeholder="Ange telefonnummer" */
                        defaultValue={user.phone}
                        ref={refPhone}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}