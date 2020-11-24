// déclaration tableau catalog pour recevoir données json
var catalog = [];

// récupération des données json via methode fetch
fetch('assets/json/catalog.json')
    .then(response => response.json())
    .then(response => {
        //variable catalog récupère le json et loadInHtml sort les données pour les traiter
        catalog = response
        loadInHTML(catalog);
    })


function loadInHTML(catalog) {

    // boucle sur catalog pour extraire les données et les implanter dans les "card" générées dynamiquement
    catalog.forEach((object, index) => {

        // clonage de la card example 
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

        // ajout attribut data-ref au bouton "J'achète"
        cardBtn.setAttribute('data-ref', catalog[index].id);
        cardBtn.id = "btn" + catalog[index].id;
                
        // clonage de la card
        clone = cardLayout.cloneNode(true);
        // attribution nouvel id
        clone.id = catalog[index].id;
        
        

        // ajout de la nouvelle card dans div row "mainRow"
        document.getElementById('cardRow').appendChild(clone);

    });

    //cardLayout.classList.add('d-none');
};


var cart = [];

function addArticleInCart(id) {
 
    
    let getId = id.replace('btn','').trim();
    //console.log("id",getId);

    catalog.forEach((item, index) => {
        
        if (getId == catalog[index].id) {
           // console.log("getId",catalog[index].id);

            if (cart.indexOf(catalog[index]) == -1) {
                //console.log("catalog",catalog[index]);
                cart.push(catalog[index]);
                //console.log("cart",cart);
            } else {
               let getIndex = cart.indexOf(catalog[index]);
               //console.log('index',getIndex)
               cart[getIndex].quantity += 1;
               console.log('qté',cart[getIndex])
            }
        }

    })
};


let cartIn = document.getElementById('cartIn');
cartIn.onclick = function() {

    let deleteModal = document.getElementById('mainModal');
    deleteModal.innerHTML = "";

    cart.forEach((item, index) => {

        console.log("cart",cart);

        let exampleModal = document.getElementById('exampleObject');

        let picture = exampleModal.querySelector('.modal-img');
        picture.src = cart[index].picture;
        console.log("picture", picture);

        let orderTitle = exampleModal.querySelector('.modal-title');
        orderTitle.innerHTML = cart[index].product;

        var price = exampleModal.querySelector('.modal-price');
        price.innerHTML = (cart[index].price * cart[index].quantity) + '€';

        let quantity = exampleModal.querySelector('.modal-quantity');
        quantity.innerHTML = cart[index].quantity;

        let moreQuantity = exampleModal.querySelector('.btn2');
        moreQuantity.id = 'btnMore' + cart[index].id;
        let lessQuantity = exampleModal.querySelector('.btn1');
        lessQuantity.id = 'btnLess' + cart[index].id;

        // clone.id = cart[index].id;
        clone = document.querySelector('#exampleObject').cloneNode(true);
        clone.id = cart[index].id;

        document.getElementById('mainModal').appendChild(clone);


    });

    // let deleteModal = document.getElementById('mainModal');
    // deleteModal.innerHTML = "";
    // if (deleteModal.innerHTML != "") {
    //     console.log("delete modal");
        
    // }

}


function removeArticleQuantity(id) {
    
    let getId = id.replace('btnLess','').trim();
    console.log("idless",getId);

    cart.forEach((item, index) => {

        let rowArticle = document.getElementById(getId);
        let price = rowArticle.querySelector('.modal-price');
        let quantity = rowArticle.querySelector('.modal-quantity');
        
        
        if (getId == cart[index].id) {
           console.log("getIdMore!!",cart[index].id);
           if (cart[index].quantity > 0) {
            cart[index].quantity -= 1;
            console.log(cart[index].quantity,"qty");
            quantity.innerHTML = cart[index].quantity;
            price.innerHTML = (cart[index].price * cart[index].quantity) + '€';
           }

        }

    })
}

function addArticleQuantity(id) {
    
    let getId = id.replace('btnMore','').trim();
    //console.log("idless",getId);

    cart.forEach((item, index) => {

        let rowArticle = document.getElementById(getId);
        let price = rowArticle.querySelector('.modal-price');
        let quantity = rowArticle.querySelector('.modal-quantity');
        
        
        if (getId == cart[index].id) {
           console.log("getIdMore!!",cart[index].id);
           if (cart[index].quantity != 0) {
            cart[index].quantity += 1;
            console.log(cart[index].quantity,"qty");
            quantity.innerHTML = cart[index].quantity;
            price.innerHTML = (cart[index].price * cart[index].quantity) + '€';
           }

        }

    })
}