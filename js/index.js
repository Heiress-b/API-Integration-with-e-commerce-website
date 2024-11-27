document.getElementById('spin-icon').style.display = 'none';
document.getElementById('catalog').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let product_title = document.getElementById('title').value;
    let product_price = document.getElementById('price').value;
    let product_description = document.getElementById('Description').value;
    let product_image = document.getElementById('image').value;
    let product_category = document.getElementById('category').value;

    let button = document.getElementById('post-product')
    button.disabled = true;
    document.getElementById('spin-icon').style.display = 'block';

    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        // headers: {
        //     'content-type': 'application/JSON'
        // },
        body: JSON.stringify({
            title: product_title,
            price: product_price,
            description: product_description,
            image: product_image,
            category: product_category
        }) 
    })


    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('spin-icon').style.display = 'none'
        button.disabled = false
    })

    .catch(error => {
        console.log(error)
    })
})

