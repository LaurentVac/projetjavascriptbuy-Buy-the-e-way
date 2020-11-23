//Déclaration des tableaux
let panier = [];
//  let catalog = [];


function loadInCART() {
  console.log(catalog);


  //accès au bouton des cartes 
  //éventuellement le selecteur à mettre à jour
  let btnCartAdd = document.querySelectorAll('button[data-ref]')

  //ajout des listeners sur les boutons et récupération de l'attribut data-ref   du bouton
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
      // Si le panier n'est pas vide on cherche si l'object y est déjà et on y ajoute +1 en quantité
      for (const element of panier) {
        console.log('element id ' + element.id +' - a '+ a);
        if (element.id == a) {
          console.log('quantité +1');
          element.quantity += 1;
          console.log(panier);
          break;

        } else { // le problème c'est que lorsqu'il y a plusieurs objets dans le panier ça continue de boucler
          console.log('pas dans le panier on ajoute au panier !');
          for (const object of catalog) {
            if (object.id == a) {
              //ajouter l'objet au panier
              panier.push(object);
              console.log(panier);
            };
          };
          break;
        };
      };
    };
    //fonction pour ajouter au panier qui marche

    //     //boucler sur le catalogue pour trouver l'objet avec la bonne ref
    //     for(const object of catalog){
    //       if(object.id == a){
    //         console.log('trouvé !');
    //         //ajouter l'objet au panier
    //         panier.push(object);
    //         console.log(panier);

    //         //on pourra récuperer la length du tableau pour afficher le compteur    à   ce moment la 
    //       };
    //     };
    //   };};
    // console.log(panier);
  };
};
