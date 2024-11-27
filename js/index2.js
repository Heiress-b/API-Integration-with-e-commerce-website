function GetAllProducts () {
    fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers:{
            'content-type': 'application/JSON'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.getElementById('display-menu').innerHTML = ''
        let received_data = ""
        data.forEach(product => {
            // console.log(product)
            received_data += `
            <div id="menu-item" class="col-12 col-md-6 col-lg-3 col-x-lg-4 ">
                <img src="${product.image}" alt="" class="img-fluid">
                <h3>${product.category}</h3>
                <h3>${product.title}</h3>
                <p>$${product.price}<sup> .99</sup></p>
                <div class="justify-content-between">
                    <a href="#display-cart"><button class="add-btn onclick ="AddToCart ()">Add to Cart</button></a>
                    <button class="add-btn " type="submit" id="delete-product">delete product</button>
                </div>
            </div>`
            
            document.getElementById('display-menu').innerHTML = received_data
        });
    })

    .catch(error => {
        console.log(error)
    })
}

document.getElementById('loader').style.display = 'none';
function GetInCategory() {
    document.getElementById('search-icon').style.display = 'none'
            
    document.getElementById('loader').style.display = 'flex';
    let input = document.getElementById('mysearch').value;
    fetch(`https://fakestoreapi.com/products/category/${input}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/JSON'
        }
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.getElementById('display-menu').innerHTML = ''
        let displaying_data = ''
        
        data.forEach(product => {
            
            displaying_data += `
            <div id="menu-item" class="col-12 col-md-3 ">
                <img src="${product.image}" alt="" class="img-fluid">
                <h3>${product.category}</h3>
                <h3>${product.title}</h3>
                <p>$${product.price}<sup> .99</sup></p>
                <div class="justify-content-between">
                    <a href="#display-cart"><button class="add-btn ">Add to Cart</button></a>
                </div>
            </div>`
            document.getElementById('display-menu').innerHTML = displaying_data
            document.getElementById('loader').style.display = 'none';
            document.getElementById('mysearch').value = ''
            document.getElementById('search-icon').style.display ='block'
        })
        
    })
    .catch(error => {
        console.log(error)
    })
}

function SearchProduct () {
    let input = document.getElementById('mysearch').value;
    fetch(`https://fakestoreapi.com/products/${input}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/JSON'
        }
    })
    .then(response => response.json())

    .then(data => {
        document.getElementById('display-menu').innerHTML = ''
        let received_product = ''
        data.find(product => {
            received_product = `
            <div id="menu-item" class="col-12 col-md-3 ">
                <img src="${product.image}" alt="" class="img-fluid">
                <h3>${product.category}</h3>
                <h3>${product.title}</h3>
                <p>$${product.price}<sup> .99</sup></p>
                <div class="justify-content-between">
                    <a href="#display-cart"><button class="add-btn id="cart">Add to Cart</button></a>
                </div>
            </div>`
            document.getElementById('display-menu').innerHTML = received_product
        })
    })

    .catch(error => {
        console.log(error)
    })


}

function AddToCart () {
    fetch('https://fakestoreapi.com/carts', {
        method: 'POST',
        headers: {
            'content-type': 'application/JSON'
        },

        body: JSON.stringify({
            userId: data._id,
            date:'2020-02-03',
            products:[{productId:5,quantity:1},{productId:1,quantity:5}]
        })
    })
    .then(response => response.json())

    .then(data => {
        console.log(data)
    })
}

function deleteProduct () {
    let data = document.getElementById('delete-product')
    fetch(`https://fakestoreapi.com/products/${data._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/JSON'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

let menu = [
    {
        title1: 'Home',
        title2: 'About',
        title3: 'Categories',
        title4: 'Contacts'
    },
];

function menuLIst () {
    let list = ''
    menu.forEach(nav => {
        list += `
        <ul class="p-0 m-0 d-block d-md-none" style="font-size: 11px; id="mobile-ul">
            <a href="#header-navs">
                <li class="active mb-3">${nav.title1}</li>
                <li class="about mb-3">${nav.title2}</li>
                <li class="mb-3">${nav.title3}</li>
                <li class="contact mb-">${nav.title4}</li>
            </a>
        </ul>`
        document.getElementById('list').innerHTML = list
    })
}



