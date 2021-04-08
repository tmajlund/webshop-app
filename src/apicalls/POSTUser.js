async function POSTUser(jsonData){
    const url = `http://localhost:43350/api/User`;
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })

    return await response.json();
}
export default POSTUser;
