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

var catalog = [

    { "quantity": 1, "picture": "assets/img/bike/samedi27.jpg", "categories": "bike", "product": "Samedi 27 FS", "description": "Le vélo de randonnée électrique Moustache Samedi 27 FS Weekend EQ vous accompagne dans toutes vos aventures ! Il vous permet de vous évader et de vous ressourcer à l'occasion, pour des virées rapides ou des escapades qui se prolongent tout au long du weekend.", "price": 6499, "ref": "ve2", "id": "velo2" },
    { "quantity": 1, "picture": "assets/img/bike/yuba-spicy.jpg", "categories": "bike", "product": "Yuba Spicy", "description": "Le vélo cargo électrique Yuba Spicy Curry City est un excellent vélo rallongé, apprécié pour sa maniabilité, sa stabilité et son étonnante capacité de charge. Pensé pour être utilisé en ville, il facilite vos déplacements au quotidien sur tous types de parcours, même vallonnés.", "price": 4750, "ref": "yuba", "id": "velo3" },
    { "quantity": 1, "picture": "assets/img/bike/friday-28.jpg", "categories": "bike", "product": "Friday 28.3", "description": "Le vélo de ville électrique Moustache Friday 28.3 montre toutes ses qualités en milieu urbain. À l'aise en ville, il vous conduit rapidement et confortablement d'un point A à un point B. Il est super pratique à l'usage !", "price": 3399, "ref": "Friday28.3", "id": "velo4" },
    { "quantity": 1, "picture": "assets/img/bike/medeo-speed.jpg", "categories": "bike", "product": "Kiffy Capsule", "description": "Le vélo cargo électrique Kiffy Capsule est un vélo rallongé électrique, dont le cadre bénéficie d'une fabrication française ! Ce vélo est un allié du quotidien, pour les différents déplacements courants : à l'école avec les enfants, au bureau, aux courses... Il se montre aussi parfaitement à l'aise en mode détente, pour des moments de flânerie en ville ou à la campagne.", "price": 4399, "ref": "kiffy", "id": "velo5" },
    { "quantity": 1, "picture": "assets/img/hoverboard/hover1.jpg", "categories": "hoverboard", "product": "Hoverboard 6,5 pouces", "description": "6,5 Pouces Noir Bluetooth télécommande et sac de transport ", "price": 96.99, "ref": 667, "id": "hboard1" },
    { "quantity": 1, "picture": "assets/img/hoverboard/hover2.jpg", "categories": "hoverboard", "product": "Hoverboard increvable", "description": "Pneu Increvable\n Musique Bluetooth", "price": 149, "ref": 776, "id": "hboard2" },
    { "quantity": 1, "picture": "assets/img/hoverboard/hover3.jpg", "categories": "hoverboard", "product": "Hoverboard 8,5 Pouces", "description": "Pneu Increvable\n Etanchéité supérieure\n Ultra résistant", "price": 249, "ref": 885, "id": "hboard3" },
    { "quantity": 1, "picture": "assets/img/hoverboard/hover4.jpg", "categories": "hoverboard", "product": "Hoverboard 10 Pouces", "description": "Pneu Increvable\n Etanchéité supérieure\n Ultra résistant", "price": 199, "ref": 996, "id": "hboard4" },
    { "quantity": 1, "picture": "assets/img/draisienne/AIR_RISE.jpg", "categories": "draisienne", "product": "AIR RISE 350W", "description": "Autonomie maximale = 50 km\nTemps de charge = 2 à 4 heures\nBatterie = li-ion 10ah 48v\nCharge maximale = 120 kg\nPoids de l'appareil = 25 kg\nTension de charge ac = 90-240v\nVitesse maximale =25 km/h\nMoteur = 350W", "price": 999.99, "ref": "350W99", "id": "draisienne1" },
    { "quantity": 1, "picture": "assets/img/draisienne/windgoo.jpg", "categories": "draisienne", "product": "B3 windgoo", "description": "Matériel: Aluminium\nPoids: 12kg/26lbs\nMoteur: 350W\nPortée: 15-25 km\nVitesse maximale: 25 km/h\nBatterie au lithium: 36V/4.4AH\nTemps de charge: 2-3 heures", "price": 499.99, "ref": "B3W49", "id": "draisienne2" },
    { "quantity": 1, "picture": "assets/img/draisienne/Moonvway.jpg", "categories": "draisienne", "product": "MoonvwayE-moov", "description": "Autonomie: 15 à 18 Km\nMoteur: 350 Watts\nBatterie:36 Volts\npuissante 6 Ah, 216 Watts\nEclairage avant/arrière", "price": 249.99, "ref": "EMOV24", "id": "draisienne3" },
    { "quantity": 1, "picture": "assets/img/draisienne/YEEP.jpg", "categories": "draisienne", "product": "YEEP.ME 1600 ", "description": "Autonomie : 50 km\nVitesse maxi : 25 km/h\nPuissance moteur 250 watts\n36 volts\nTemps de charge 3 heures\nFreins : Disque avant et disque arrière\nEclairage : Phare led\nPneus réfléchissants : 16", "price": 1299.99, "ref": "ME1600W", "id": "draisienne4" },
    { "quantity": 1, "picture": "assets/img/trotinette/FLYBLADE.jpg", "categories": "trotinette", "product": "FLYBLADE FBS-XM8", "description": "Vitesse max:25 Km\nMoteur: 350 Watts\nBatterie:36 Volts\npuissante 6 Ah, 216 Watts\nAutonomie 20 à 25 Km\nTemps de charge 3-5h\n", "price": 249.99, "ref": "FBSXM24", "id": "Trotinette1" },
    { "quantity": 1, "picture": "assets/img/trotinette/MOONWAY.jpg", "categories": "trotinette", "product": "XIAOMI MI", "description": "Distance max: 30km\nVitesse max:25 Km\nMoteur: 350 Watts\nBatterie:36 Volts\npuissante 6 Ah, 216 Watts\nFeux avant et arrière\n", "price": 149.99, "ref": "XIAO14W", "id": "Trotinette2" },
    { "quantity": 1, "picture": "assets/img/trotinette/WISPEED.jpg", "categories": "trotinette", "product": "Wispeed", "description": "Vitesse max:25 Km\nMoteur: 350 Watts\nBatterie:36 Volts\npuissante 6 Ah, 216 Watts\nAutonomie: 20 Km Max\nTemps de charge 3-5h\nFrein à disques : arrêt rapide et agréable", "price": 279.99, "ref": "Wis279W", "id": "Trotinette3" },
    { "quantity": 1, "picture": "assets/img/trotinette/XIMIO.jpg", "categories": "trotinette", "product": "MOOVWAY BW10", "description": "Vitesse max:25 Km\nMoteur: 350 Watts\nBatterie:36 Volts\npuissante 6 Ah\nAutonomie: 20 Km Max\nTemps de charge 3-5h\nFrein friction arrière", "price": 349.99, "ref": "BW1034W", "id": "Trotinette4" }

];

var catalogFiltered = catalog.filter(function(element) {


    return element.categories == "bike";

})
console.log(catalogFiltered)

// let navlg1 = document.querySelector('.navlg1');

// navlg1.onclick = function(bike)

// let navlg2 = document.querySelector('.navlg2');
// let navlg3 = document.querySelector('.navlg3');
// let navlg4 = document.querySelector('.navlg4');