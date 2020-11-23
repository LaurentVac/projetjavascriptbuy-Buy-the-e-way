let panier = [{
        "picture": "assets/img/bike/samedi27.jpg",
        "categories": "bike",
        "product": "Samedi 27 FS",
        "description": "Le vélo de randonnée électrique Moustache Samedi 27 FS Weekend EQ vous accompagne dans toutes vos aventures ! Il vous permet de vous évader et de vous ressourcer à l'occasion, pour des virées rapides ou des escapades qui se prolongent tout au long du weekend.",
        "price": 6499,
        "ref": "ve2",
        "id": "velo2",
        "quantity": 1,
    },
    {
        "picture": "assets/img/trotinette/XIMIO.jpg",
        "categories": "trotinette",
        "product": "MOOVWAY BW10",
        "description": "Vitesse max:25 Km\nMoteur: 350 Watts\nBatterie:36 Volts\npuissante 6 Ah\nAutonomie: 20 Km Max\nTemps de charge 3-5h\nFrein friction arrière",
        "price": 349.99,
        "ref": "BW1034W",
        "id": "Trotinette4",
        "quantity": 1,
    }
];



let cartIn = document.getElementById('cartIn');
cartIn.onclick = function() {

    panier.forEach((item, index) => {



        let picture = document.querySelector('#exampleObject .img-fluid');
        picture.src = panier[index].picture;
        console.log("picture", picture);

        let orderTitle = document.getElementById('orderTitle');
        orderTitle.innerHTML = panier[index].product;

        let price = document.getElementById('price');
        price.innerHTML = panier[index].price + '€';

        let quantity = document.getElementById('quantity');
        quantity.innerHTML = panier[index].quantity;

        clone = document.querySelector('#exampleObject').cloneNode(true);
        clone.id = panier[index].id;

        document.getElementById('mainModal').appendChild(clone);


    });

    let mask = document.getElementById('exampleObject');
    mask.classList.add('d-none');


}