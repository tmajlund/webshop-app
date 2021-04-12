import React, {useState, useEffect} from 'react';
import { useWebshop } from '../../contexts/WebshopContext';
import { useParams } from 'react-router-dom';
import SizeItem from './SizeItem';
import QuantityItems from './QuantityItems';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function ProductDetailView() {
    const {singleProduct, getSingleProduct, clearSingleProduct, productSizes, addProductToCart} = useWebshop();
    const {productId} = useParams();
    const [sizeButton, setSizeButton] = useState('Välj storlek');
    const [quantityButton, setQuantityButton] = useState('Antal');
    const [succcess, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        getSingleProduct(productId);

        return () => {
            clearSingleProduct();
        }
    }, [productId]);

    let sizeArray;

    if(productSizes)
    {
        sizeArray = productSizes.map((size) => {
            return <SizeItem size={size} key={size} />
        })
    }

    const handleSelect = (evtKey, e) => {
        e.preventDefault(e);
        setSizeButton(evtKey);
    }

    const handleSelect2 = (evtKey, e) => {
        e.preventDefault(e);
        setQuantityButton(evtKey);
    }

    const handleClick = (e) => {
        e.preventDefault(e);
        if(sizeButton === 'Välj storlek' || quantityButton === 'Antal')
        {
            setError("Välj storlek och antal");
        }
        else
        {
            let newProductItem = {
                product: `${singleProduct}`,
                productId: `${productId}`,
                quantity: `${quantityButton}`,
                size: `${sizeButton}`,
                totalPrice: `${quantityButton * singleProduct.price}`                
            }
            addProductToCart(newProductItem);
            setSuccess(true);
        }       
    }

    return(        
        <Container className="pt-4" style={{ maxWidth: "750px" }}>
            <Card className="my-2"style={{ minWidth: "500px", maxWidth: "500px" }}>
                <Card.Img variant="top" src={`/images/${singleProduct.productId}.jpg`}/>
                <Card.Body>
                <Card.Title>{singleProduct.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Pris: {singleProduct.price} kr
                </Card.Subtitle>
                <Card.Text>{singleProduct.description}</Card.Text>
                <Card.Text>Finns i storlek: {singleProduct.minSize}-{singleProduct.maxSize}</Card.Text>
                <ButtonGroup>
                    <DropdownButton variant="btn btn-outline-secondary" id="dropdown-basic" title={sizeButton} style={{marginRight: "10px"}} onSelect={handleSelect}>
                        {sizeArray}
                    </DropdownButton>
                    <DropdownButton variant="btn btn-outline-secondary" id="dropdown-basic" title={quantityButton} style={{marginRight: "10px"}} onSelect={handleSelect2}>
                        <QuantityItems />
                    </DropdownButton>
                    <Button variant="outline-secondary" onClick={handleClick}>Köp</Button>
                </ButtonGroup>
                </Card.Body>
                {succcess && <Alert variant="success">Produkt tillagd i varukorg</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
            </Card>
        </Container>
    );
}
