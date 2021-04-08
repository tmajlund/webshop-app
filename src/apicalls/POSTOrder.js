async function POSTOrder(jsonData){
    const url = `http://localhost:43350/api/Order`;
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

export default POSTOrder