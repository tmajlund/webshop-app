async function GETProducts(){
    const url = `http://localhost:43350/api/Product`;
    const response = await fetch(url);
    return await response.json();
}

export default GETProducts;