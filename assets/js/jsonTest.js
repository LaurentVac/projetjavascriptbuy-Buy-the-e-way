fetch('assets/json/catalog.json')
  .then(response => response.json())
  .then(catalog => {
    loadInHTML(catalog);
  })


function loadInHTML(catalog){
    console.log(catalog);
    console.log(catalog[0].produit0);
}
