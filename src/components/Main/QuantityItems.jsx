import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

export default function QuantityItems() {
    return(
        <>
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
        </>
    )
}