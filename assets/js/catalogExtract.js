// déclaration tableau catalog pour recevoir données json
var catalog = [];

// récupération des données json via methode fetch
fetch('assets/json/catalog.json')
    .then(response => response.json())
    .then(json => {
        //variable catalog récupère le json et loadInHtml sort les données pour les traiter
        catalog = json;
        loadInHTML();
        //loadInCART();
    })


function loadInHTML() {

    // boucle sur catalog pour extraire les données et les implanter dans les "card" générées dynamiquement
    catalog.forEach((object, index) => {

        // clonage de la card example ... essaie d"'utiliser fonction fetch pour récupérer !!!!!!!!!!!!!!!!!!!!!!!
        let cardLayout = document.getElementById('cardLayout');

        // Déclaration varialbles 
        let cardPicture = cardLayout.querySelector('.card-img-top');
        let cardPrice = cardLayout.querySelector('.card-title');
        let cardProduct = cardLayout.querySelector('.card-subTitle');
        let cardPara = cardLayout.querySelector('.card-text')
        let cardBtn = cardLayout.querySelector('.btn');
        let cardRef = cardLayout.querySelector('.text-muted');

        //  ------- Insertion des données récupéré du json --------- //

        // picture
        cardPicture.src = catalog[index].picture;
        cardPicture.alt = "photo " + catalog[index].product;
        // Ajustement hauteur text en fonction du contenu
        if (catalog[index].categories == "hoverboard") {
            cardPara.style.height = "40px";
        } else if (catalog[index].categories == "bike") {
            cardPara.style.height = "150px";
        } else if (catalog[index].categories == "draisienne") {
            cardPara.style.height = "100px";
        } else {
            cardPara.style.height = "90px";
        }

        // Prix
        cardPrice.innerHTML = catalog[index].price + "€";
        // Nom produit
        cardProduct.innerHTML = catalog[index].product;
        cardProduct.style.fontSize = "30px";
        // Description produit
        cardPara.innerHTML = catalog[index].description;
        // bouton acheter
        cardBtn.style.height = "50px";
        // référence produit
        cardRef.innerHTML = "Réf: " + catalog[index].ref;
        cardRef.style.fontSize = "20px";

        // clonage de la card
        clone = cardLayout.cloneNode(true);
        // attribution nouvel id
        clone.id = catalog[index].id;
        // ajout attribut data-ref au bouton "J'achète"
        cardBtn.setAttribute('data-ref', clone.id);

        // ajout de la nouvelle card dans div row "mainRow"
        document.getElementById('mainRow').appendChild(clone);

    });

    //On masque la card example
    cardLayout.classList.add('d-none');

};