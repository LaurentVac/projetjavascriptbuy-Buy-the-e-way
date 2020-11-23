//Déclaration des tableaux
let panier = [];
//  let catalog = [];


function loadInCART() {
  console.log(catalog);


  //accès au bouton des cartes 
  //éventuellement le selecteur à mettre à jour
  let btnCartAdd = document.querySelectorAll('button[data-ref]')

  //ajout des listeners sur les boutons et récupération de l'attribut data-ref du bouton
  btnCartAdd.forEach(item => {
    ;
    item.addEventListener('click', () => {
      //récupération de l'attribut data-ref du bouton
      let ref = item.getAttribute('data-ref');
      console.log(ref);
      // appel de la fonction ajouter au panier
      addProductToCart(ref);
    });
  });


  function addProductToCart(a) {
    
    //si le panier est vide on ajoute forcement l'objet au panier
    if (panier.length == 0) {
      for (var object of catalog) {
        if (object.id == a) {
          console.log('ajout au panier !');
          //ajouter l'objet au panier
          panier.push(object);
          console.log(panier);
        }; 
      };
    } else{
      let present = [];
      // Pour tout les élements du panier on regarde si l'element qu'on veux ajouter est déjà présent ou non et on repertorie dans le tableau present les reponses
      for (const element of panier) {
        console.log('element id ' + element.id +' - a '+ a);
        
        if (element.id == a) {
          present.push(true);
        } else{
          present.push(false);
        }
      };
      console.log(present);
      // On regarde s'il y a au moins 1 true dans le tableau present
      if(present.indexOf(true) != -1){
        // on recupère l'index du true qui correspond à celui du panier et on ajoute +1 à la quantity
        panier[present.indexOf(true)].quantity +=1;
      } else{
        // S'il n'y a pas de true on ajoute au panier l'objet correspondant
        console.log('pas dans le panier on ajoute au panier !');
          for (const object of catalog) {
            if (object.id == a) {
              //ajouter l'objet au panier
              panier.push(object);
            };
          };
        };
        console.log(panier);

        };
    };
};
