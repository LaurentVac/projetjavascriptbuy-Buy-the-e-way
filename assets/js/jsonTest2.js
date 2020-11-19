fetch('assets/json/catalog.json')
  .then(response => response.json())
  .then(catalog => {
    loadInHTML(catalog);
  })


function loadInHTML(catalog){

    //console.log(catalog);

  
    // boucle sur catalog pour extraire les données et les implanter dan sles "card" générées dynamiquement
    catalog.forEach((object, index) => {

      // clonage de la card example ... essaie d"'utiliser fonction fetch pour récupérer !!!!!!!!!!!!!!!!!!!!!!!
      clone = document.getElementById("cardToClone").cloneNode(true);

      // attribution du nouvel id
      clone.id = catalog[index].id;

      // Déclaration varialbles 
      let cardPrice = document.querySelector('.card-title');
      let cardProduct = document.querySelector('.card-subTitle');
      let cardPara = document.querySelector('.card-text');
      let cardBtn = document.querySelector('.btn');
      let cardRef = document.querySelector('.text-muted');

      // Insertion des données récupéré du json
      cardPrice.innerHTML = catalog[index].prix + "€";
      cardProduct.innerHTML = catalog[index].produit;
      cardPara.innerHTML = catalog[index].description;
      cardPara.style.height = "70px";
      cardBtn.style.height = "50px";
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