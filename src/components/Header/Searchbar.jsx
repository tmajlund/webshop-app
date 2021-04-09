import React, {useRef} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useWebshop } from '../../contexts/WebshopContext';

export default function Searchbar() {
  const {searchProducts} = useWebshop();
  const searchString = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(searchString.current.value);
  };

  return(
    <>
      <Form inline onSubmit={handleSubmit}>
        <FormControl type="text" placeholder="Sök" className=" mr-sm-2" ref={searchString}/>
        <Button variant="btn btn-outline-secondary"type="submit">Sök</Button>
      </Form>
    </>
  )
}



