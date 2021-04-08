async function GETUserByLoginCredentials(email, password){
 const url = `http://localhost:43350/api/User/${email}/${password}`;
 const response = await fetch(url);

 if(await response.status === 200)
 {
    return response.json();
 }
 else
 {
    return null;
 }
 
}

export default GETUserByLoginCredentials;