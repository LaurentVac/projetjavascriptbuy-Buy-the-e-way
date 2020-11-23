
       


let cartIn = document.getElementById('cartIn');
cartIn.onclick = function() {
    
    document.getElementById('mainModal').innerHTML = '';

    panier.forEach((item, index) => {



        let picture = document.querySelector('#exampleObject .img-fluid');
        picture.src = panier[index].picture;
        console.log("picture", picture);

        let orderTitle = document.getElementById('orderTitle');
        orderTitle.innerHTML = panier[index].product;

        let price = document.getElementById('price');
        price.innerHTML = (panier[index].price * panier[index].quantity) + '€';

        let quantity = document.getElementById('quantity');
        quantity.innerHTML = panier[index].quantity;

        clone = document.querySelector('#exampleObject').cloneNode(true);
        clone.id = panier[index].id;

        document.getElementById('mainModal').appendChild(clone);


    });

    // let mask = document.getElementById('exampleObject');
    // mask.classList.add('d-none');


}