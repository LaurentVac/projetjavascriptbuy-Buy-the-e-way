//Déclaration des tableaux
let panier = [];
let catalog = [];


fetch('assets/json/catalog.json')
  .then(response => response.json())
  .then(json => {catalog = json;
    loadInHTML();
  });

function loadInHTML(){
  console.log(catalog);
};

//accès au bouton
let btnCartAdd = document.querySelectorAll('.card-body a')
console.log(btnCartAdd);

btnCartAdd.forEach(item => {console.log(this);
  item.addEventListener('click', ()=>{
    console.log(item);
    let ref = item.getAttribute('data-ref');
    console.log(ref);
    addProductToCart(ref);
  });
});


function addProductToCart(a){
  //boucler sur le catalogue pour trouver l'objet avec la bonne ref
  for(const element of catalog){
    if(element.id == a){
      console.log('trouvé !');
      //ajouter l'objet au panier
    };
  };
};