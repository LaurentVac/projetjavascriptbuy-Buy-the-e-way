//Déclaration des tableaux
let panier = [];
//  let catalog = [];


function loadInCART(){
  console.log(catalog);


  //accès au bouton des cartes 
  //éventuellement le selecteur à mettre à jour
  let btnCartAdd = document.querySelectorAll('button[data-ref]')
  console.log(btnCartAdd);
  
  //ajout des listeners sur les boutons et récupération de l'attribut data-ref   du bouton
  btnCartAdd.forEach(item => {;
    item.addEventListener('click', ()=>{
      console.log(item);
      //récupération de l'attribut data-ref du bouton
      let ref = item.getAttribute('data-ref');
      console.log(ref);
      // appel de la fonction ajouter au panier
      addProductToCart(ref);
    });
  });
  
  
  function addProductToCart(a){
    //boucler sur le catalogue pour trouver l'objet avec la bonne ref
    for(const element of catalog){
      if(element.id == a){
        console.log('trouvé !');
        //ajouter l'objet au panier
        panier.push(element);
        console.log(panier);
      
        //on pourra récuperer la length du tableau pour afficher le compteur à   ce moment la 
      };
    };
  };
};