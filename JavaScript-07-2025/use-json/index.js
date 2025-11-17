fetch("products.json")
.then(response => response.json())
.then(data => {
    const prod = data.products;
    // console.log(prod);
    let container_cover = document.querySelector("#container-cover");
        container_cover.innerHTML = "";
    let cardBox;    
    prod.forEach((val,ind)=>{  
        cardBox += `
            <div class="cardbox">
            <h2>Brand: ${val.brand}</h2>
            <p>Category: ${val.category}</p>
            <p>Discription: ${val.description}</p>
            <p>discountPercentage: ${val.discountPercentage}</p>
            <p>Price: ${val.price}</p>
            <p>Rating: ${val.rating}</p>
            <p>Stock: ${val.stock}</p>
            <p>Title: ${val.title}</p>
            </div>
        `;
    })
    container_cover.innerHTML = cardBox; 
})
.catch(error => console.log(error))