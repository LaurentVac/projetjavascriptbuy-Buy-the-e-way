//Déclaration des tableaux
let panier = [];
//  let catalog = [];


function loadInCART() {
  console.log(catalog);


  //accès au bouton des cartes 
  //éventuellement le selecteur à mettre à jour
  let btnCartAdd = document.querySelectorAll('button[data-ref]')
  // console.log(btnCartAdd);

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
    //vérifier si l'objet est déjà dans le panier
    //ça marche pas car je boucle sur un panier vide
    if(panier.length == 0){
      for (const object of catalog) {
        if (object.id == a) {
          console.log('ajout au panier !');
          //ajouter l'objet au panier
          panier.push(object);
          console.log(panier);
        };
      };
    } else {
      for(const element of panier) {
        if(element.id == a){
          console.log('quantité +1');
          element.quantity += 1;
          console.log(panier);
        } else {
          console.log('pas dans le panier on ajoute au panier !');
          for (const object of catalog) {
            if (object.id == a) {
              //ajouter l'objet au panier
              panier.push(object);
              console.log(panier);
            };
          };
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