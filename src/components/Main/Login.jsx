import { useRef, useState } from "react";
import { useWebshop } from '../../contexts/WebshopContext';
import {Alert, Button} from "react-bootstrap";

const Login = () => {
    const email = useRef();
    const password = useRef();

    const {getUser} = useWebshop();

    const [succcess, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSuccess("");
        setError("");
    
        let response = await getUser(email.current.value, password.current.value);
        if(response !== null){
          setSuccess(true);
        }else if(response === null){
          setError("Kunde inte logga in.");
        }
      };
    
      return (
        <div className="create-user-outer">
          <div className="create-user-inner">
            <h4>Logga in</h4>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input type="text" required ref={email} />
    
              <label>Lösenord:</label>
              <input type="password" required ref={password} />
    
              {succcess && <Alert variant="success">Inloggad!</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
    
              <Button type="submit" variant="btn btn-outline-secondary">Logga in</Button>
            </form>
          </div>
        </div>
      );
}

export default Login;