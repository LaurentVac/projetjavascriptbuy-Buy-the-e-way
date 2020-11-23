// déclaration tableau pour recevoir données json
var catalog = [];

// récupération des données json via methode fetch
fetch('assets/json/catalog.json')
  .then(response => response.json())
  .then(json => {
    //variable catalog récupère le json et loadInHtml sort les données pour les traiter
    catalog = json;
    loadInHTML();
  })


function loadInHTML(){

    // boucle sur catalog pour extraire les données et les implanter dan sles "card" générées dynamiquement
    catalog.forEach((object, index) => {

      // clonage de la card example ... essaie d"'utiliser fonction fetch pour récupérer !!!!!!!!!!!!!!!!!!!!!!!
      clone = document.getElementById("cardToClone").cloneNode(true);

      // attribution du nouvel id
      clone.id = catalog[index].id;
      let cloneChild = clone.children;
      console.log("clonechild",cloneChild);
      let cardChild = cloneChild[0].children; 
      console.log("cardChild",cardChild);
      let cardChildBody = cardChild[1].children; 
      console.log("cardBody",cardChildBody);
      let cardBtnChild = cardChild[2];
      console.log("bntchild",cardBtnChild);
      let cardRefChild = cardChild[3];
      console.log("ref", cardRefChild);

      // Déclaration varialbles 
      let cardPicture = cardChild[0];
      // cardPicture = document.querySelector('#' + clone.id + ' .card-img-top');
      let cardPrice = cardChildBody[0];
      let cardProduct = cardChildBody[1];
      let cardPara = cardChildBody[2];
      let cardBtn = cardBtnChild.querySelector('.btn');
      let cardRef = cardRefChild.querySelector('.text-muted');

      //  ------- Insertion des données récupéré du json --------- //

        // picture
        cardPicture.src = catalog[index].picture;
        cardPicture.alt = "photo " + catalog[index].product;

        if (catalog[index].categories == "hoverboard") {
          cardPara.style.height = "30px";
        } else {
          cardPara.style.height = "135px";
        }
        
        cardPrice.innerHTML = catalog[index].price + "€";
        cardProduct.innerHTML = catalog[index].product;
        cardPara.innerHTML = catalog[index].description;
        
        // bouton acheter
        cardBtn.style.height = "50px";
        cardBtn.setAttribute('data-ref', clone.id);

        cardRef.innerHTML = "Réf: " + catalog[index].ref;

      // ajout de la nouvelle card dans la di row "mainRow"
      document.getElementById('mainRow').appendChild (clone);

    });
}











// let i = 0;

// function cloneDiv() {
//     i++;
//     cloneFirstName = document.getElementById("firstName").cloneNode(true);
//     cloneAge = document.getElementById("age").cloneNode(true);
//     cloneFirstName.id += i;
//     document.getElementById('form').appendChild (cloneFirstName);
//     cloneAge.id += i;
//     document.getElementById('form').appendChild (cloneAge);

// }