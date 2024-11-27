document.getElementById('sign-up').addEventListener('submit', (e) => {
    e.preventDefault();

    let user_email = document.getElementById('email').value;
    let user_username = document.getElementById('username').value;
    let user_password = document.getElementById('password').value;
    let user_firstname = document.getElementById('firstname').value;
    let user_lastname = document.getElementById('lastname').value;
    let user_address = document.getElementById('address').value;
    let user_city = document.getElementById('city').value;
    let user_street = document.getElementById('street').value;
    let user_housenumber = document.getElementById('house-number').value;
    let user_postalcode = document.getElementById('postal-code').value;
    let user_geolocation = document.getElementById('geolocation').value;
    let user_contact = document.getElementById('contact').value;


    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/JSON'
        },

        body: JSON.stringify({
            email: user_email,
            username: user_username,
            password: user_password,
            firstname: user_firstname,
            lastname: user_lastname,
            address: user_address,
            city: user_city,
            street: user_street,
            number: user_housenumber,
            zipcode: user_postalcode,
            geolocation: user_geolocation,
            phone: user_contact  
        })
    })
    .then(response => response.json())


    .then(data => {
        console.log(data)
    })
})