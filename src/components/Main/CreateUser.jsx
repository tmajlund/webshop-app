import { useRef, useState } from "react";
import { useWebshop } from '../../contexts/WebshopContext';
import {Alert, Button} from "react-bootstrap";

const CreateUser = () => {
  const email = useRef();
  const password = useRef();
  const address = useRef();
  const phone = useRef();

  const {postUser} = useWebshop();
  const [succcess, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    let newUser = {
      email: `${email.current.value}`,
      password: `${password.current.value}`,
      address: `${address.current.value}`,
      phone: `${phone.current.value}`,
    };

    let response = await postUser(newUser);
    console.table(newUser);
    console.log(response)
    if(response !== null){
      setSuccess(true);
    }else if(response === null){
      setError("Kunde inte skapa användare");
    }
  };

  return (
    <div className="create-user-outer">
      <div className="create-user-inner">
        <h4>Skapa ny användare</h4>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="text" required ref={email} />

          <label>Lösenord:</label>
          <input type="text" required ref={password} />

          <label>Adress:</label>
          <input type="text" required ref={address} />

          <label>Telefon:</label>
          <input type="text" required ref={phone} />

          {succcess && <Alert variant="success">Användare skapad</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Button type="submit" variant="btn btn-outline-secondary">Skapa</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;