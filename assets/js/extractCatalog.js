// déclaration tableau pour recevoir données json
var catalog = [];

// récupération des données json via methode fetch
fetch('assets/json/catalog.json')
    .then(response => response.json())
    .then(json => {
        //variable catalog récupère le json et loadInHtml sort les données pour les traiter
        catalog = json;
        loadInHTML();
        loadInCART();
    })


function loadInHTML() {

    // boucle sur catalog pour extraire les données et les implanter dan sles "card" générées dynamiquement
    catalog.forEach((object, index) => {

        // clonage de la card example ... essaie d"'utiliser fonction fetch pour récupérer !!!!!!!!!!!!!!!!!!!!!!!
        clone = document.getElementById("cardToClone").cloneNode(true);

        // attribution du nouvel id
        clone.id = catalog[index].id;
        let cloneChild = clone.children;
        console.log(cloneChild);
        let cardChild = cloneChild[0].children;
        let cardChildBody = cardChild[1].children;

        // Déclaration varialbles 
        let cardPicture = cardChild[0];
        let cardPrice = cardChildBody[0];
        let cardProduct = cardChildBody[1];
        let cardPara = cardChildBody[2];
        let cardBtn = cardChild[2].querySelector('.btn');
        let cardRef = cardChild[3].querySelector('.text-muted');

        //  ------- Insertion des données récupéré du json --------- //

        // picture
        cardPicture.src = catalog[index].picture;
        cardPicture.alt = "photo " + catalog[index].product;

        if (catalog[index].categories == "hoverboard") {
            cardPara.style.height = "40px";
        } else
        if (catalog[index].categories == "bike") {
            cardPara.style.height = "150px";
        } else
        if (catalog[index].categories == "draisienne") {
            cardPara.style.height = "100px";
        } else {
            cardPara.style.height = "90px";
        }

        // Prix
        cardPrice.innerHTML = catalog[index].price + "€";
        // Nom du produit
        cardProduct.innerHTML = catalog[index].product;
        cardProduct.style.fontSize = "30px";
        // Description du produit
        cardPara.innerHTML = catalog[index].description;
        // bouton acheter
        cardBtn.style.height = "50px";
        // ajout attribut data-ref
        cardBtn.setAttribute('data-ref', clone.id);
        // référence produit
        cardRef.innerHTML = "Réf: " + catalog[index].ref;
        cardRef.style.fontSize = "20px";

        // ajout de la nouvelle card dans la di row "mainRow"
        document.getElementById('mainRow').appendChild(clone);

    });

    // On cache la card example
    let maskClone = document.querySelector('#cardToClone');
    maskClone.classList.add('d-none');

    return catalog;
};