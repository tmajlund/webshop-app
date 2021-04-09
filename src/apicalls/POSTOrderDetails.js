async function POSTOrderDetails(jsonData){
    const url = `http://localhost:43350/api/OrderDetails`;
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })

    return response.ok;

}

export default POSTOrderDetails;