
export default function ProductSizes(product){
    let sizeArray = [];

    if(product.category === "Tröjor")
    {
        for(let i = product.minSize; i<=product.maxSize; i+=2)
        {
            sizeArray.push(i);
        }
    }
    else if(product.category === "Skor")
    {
        for(let i = product.minSize; i<=product.maxSize; i++)
        {
            sizeArray.push(i);
        }
    }

    return sizeArray;
}