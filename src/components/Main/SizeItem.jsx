import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

export default function SizeItem({size}){
    return(
        <>
            <Dropdown.Item eventKey={size}>{size}</Dropdown.Item>
        </>
    );
}