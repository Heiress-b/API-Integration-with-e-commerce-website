document.getElementById('delete-product').addEventListener('click', (e) => {
    e.preventDefault()


    fetch(`https://fakestoreapi.com/products/6`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/JSON'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
})