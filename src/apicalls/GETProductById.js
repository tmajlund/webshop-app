async function GETProductById(productId) {
    const url = `http://localhost:43350/api/Product/${productId}`;
    const response = await fetch(url);
    return await response.json();
}

export default GETProductById;