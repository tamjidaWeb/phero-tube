const handleAddToCart = () =>{
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('quantity');

    const name = productName.value;
    const quantity = productQuantity.value;
    displayProduct(name,quantity);
    handleAddToLocalStorage(name,quantity)

    productName.value='';
    productQuantity.value='';

}

   const displayProduct = (productName,quantity)=>{
        const productContainer = document.getElementById('product-container');

        const li = document.createElement('li');
        li.innerHTML=`${productName}: ${quantity}`;
        productContainer.appendChild(li)
   }


   const handleAddToLocalStorage=(productName,quantity)=>{
        const newProduct = {name:quantity};

        localStorage.setItem('cart',JSON.stringify(newProduct))
   }