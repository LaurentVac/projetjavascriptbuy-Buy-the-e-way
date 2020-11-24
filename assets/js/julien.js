
       


let cartIn = document.getElementById('cartIn');
cartIn.onclick = function() {
    //création du panier 

    //remise à 0 du panier
    document.getElementById('mainModal').innerHTML = '';

    // remplissage de la modal du panier pour toute les lignes du tableau panier
    panier.forEach((item, index) => {

        let picture = document.querySelector('#exampleObject .img-fluid');
        picture.src = panier[index].picture;
        console.log("picture", picture);

        let orderTitle = document.getElementById('orderTitle');
        orderTitle.innerHTML = panier[index].product;

        let price = document.getElementById('price');
        price.setAttribute('data-ref', panier[index].id);
        price.innerHTML = (panier[index].price * panier[index].quantity) + '€';

        let quantity = document.getElementById('quantity');
        quantity.setAttribute('data-ref', panier[index].id);
        quantity.innerHTML = panier[index].quantity;

        // ajout attribut data-ref au bouton "+"
        let btnQtyAdd = document.querySelector('.qtyAdd');
        btnQtyAdd.setAttribute('data-ref', panier[index].id);

        // ajout attribut data-ref au bouton "-"
        let btnQtyRemove = document.querySelector('.qtyRemove');
        btnQtyRemove.setAttribute('data-ref', panier[index].id);


        clone = document.querySelector('#exampleObject').cloneNode(true);
        clone.id = panier[index].id;

        document.getElementById('mainModal').appendChild(clone);
    });
    // fin de création du panier

        //accès au bouton des quantités 
        //éventuellement le selecteur à mettre à jour
        let btnQtyAdd = document.querySelectorAll('.qtyAdd');
        let btnQtyRemove = document.querySelectorAll('.qtyRemove');
        console.log(btnQtyAdd);
        
        // Création des listeners sur les btn +
        btnQtyAdd.forEach( item => {
          item.addEventListener('click', function (){
            //aller chercher le data-ref du bouton
            let ref = item.getAttribute('data-ref');
        
            //appel de la fonction pour ajouter une quantité
            addQty(ref);
          });
        });
        
        // Création des listeners sur les btn -
        btnQtyRemove.forEach( item => {
            item.addEventListener('click', function removeQtyFromCart(){
              //aller chercher le data-ref du bouton
              let ref = item.getAttribute('data-ref');
        
              //appel de la fonction pour retirer une quantité
              removeQty(ref);
            });
          });

// fonction pour ajouter la quantité
    function addQty(a){
      //modifier la quantité de l'objet dans le panier
      for(const element of panier){
        if(element.id == a){
          element.quantity += 1;
          console.log(panier);            
          //refaire les calculs et l'affichage de la quantité et le calcul
          quantity.innerHTML = element.quantity;
          price.innerHTML = (element.price * element.quantity) + '€';
  // problème dans le renvoi de l'affichage par séléction de quantity et price
        }
      };
    };

//fonction pour supprimer la quantité    
    function removeQty(a){
      //modifier la quantité de l'objet dans le panier
      for(const element of panier){
        if(element.id == ref){
          element.quantity -= 1;
          console.log(panier);

          //refaire les calculs et l'affichage de lquantité et le calcul
          quantity.innerHTML = element.quantity;
          price.innerHTML = (element.price * element.quantity) + '€';
  // problème dans le renvoi de l'affichage par séléction de quantity et price
        
        };
      };
    };
 };
