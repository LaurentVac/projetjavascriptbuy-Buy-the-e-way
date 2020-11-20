fetch('assets/json/catalog.json')
  .then(response => response.json())
  .then(catalog => {
    loadInHTML(catalog);
  })


function loadInHTML(catalog){
    console.log(catalog);
    //console.log(catalog[0].produit0);
  
    // boucle sur catalog pour extraire les données et les implanter dan sles "card" générées dynamiquement
    catalog.forEach((object, index) => {

      // récupération des différents éléments de la card - création des variables
      
      let cardName = document.getElementById('cardName');
      let cardHeader = document.getElementById('cardHeader');
      let cardImg = document.getElementById('cardImg');
      let cardTitle = document.getElementById('cardTitle');
      let cardSubtitle = document.getElementById('cardSubtitle');
      let cardText = document.getElementById('cardText');
      let cardTextMuted = document.getElementById('cardTextMuted');

      let i=1;

      // clonage de la card example ... essaie d"'utiliser fonction fetch pour récupérer !!!!!!!!!!!!!!!!!!!!!!!
      clone = document.getElementById("cardToClone").cloneNode(true);
      clone.id = catalog[index].id;

      cardTitle.innerHTML = catalog[index].prix + "€";

      cardSubtitle.innerHTML = catalog[index].produit;

      cardText.innerHTML = catalog[index].description;
      cardText.style.height = "70px";
      //cardText.id = cardText.id + "i";
      cardTextMuted.innerHTML = "Réf: " + catalog[index].ref;
      //cardTextMuted.id = cardTextMuted.id + "i";



      // ajout de la nouvelle card dans la di row "mainRow"
      document.getElementById('mainRow').appendChild (clone);

      i++;
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