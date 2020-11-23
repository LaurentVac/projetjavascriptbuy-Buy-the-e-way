
       


let cartIn = document.getElementById('cartIn');
cartIn.onclick = function() {
    
    document.getElementById('mainModal').innerHTML = '';

    panier.forEach((item, index) => {



        let picture = document.querySelector('#exampleObject .img-fluid');
        picture.src = panier[index].picture;
        console.log("picture", picture);

        let orderTitle = document.getElementById('orderTitle');
        orderTitle.innerHTML = panier[index].product;

        let price = document.getElementById('price');
        price.innerHTML = (panier[index].price * panier[index].quantity) + '€';

        let quantity = document.getElementById('quantity');
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

    // let mask = document.getElementById('exampleObject');
    // mask.classList.add('d-none');

// fonction pour ajouter ou supprimer la quantité

        //accès au bouton des quantités 
        //éventuellement le selecteur à mettre à jour
        let btnQtyAdd = document.querySelectorAll('.qtyAdd');
        let btnQtyRemove = document.querySelectorAll('.qtyRemove');
        console.log(btnQtyAdd);
      
        // Création des listeners sur les btn +
        btnQtyAdd.forEach( item => {
          item.addEventListener('click', function addQtyFromCart(){
            //aller chercher le data-ref du bouton
            let ref = item.getAttribute('data-ref');
      
            //modifier la quantité de l'objet dans le panier
            for(const element of panier){
              if(element.id == ref){
                element.quantity += 1;
                console.log(panier);

                
                //refaire les calculs et l'affichage de la quantité et le calcul
                quantity.innerHTML = element.quantity;
                price.innerHTML = (element.price * element.quantity) + '€';
              };
            };
          });
        })

        // Création des listeners sur les btn -
        btnQtyRemove.forEach( item => {
            item.addEventListener('click', function removeQtyFromCart(){
              //aller chercher le data-ref du bouton
              let ref = item.getAttribute('data-ref');
        
              //modifier la quantité de l'objet dans le panier
              for(const element of panier){
                if(element.id == ref){
                  element.quantity -= 1;
                  console.log(panier);
  
                  
                  //refaire les calculs et l'affichage de lquantité et le calcul
                  quantity.innerHTML = element.quantity;
                  price.innerHTML = (element.price * element.quantity) + '€';
                };
              };
            });
          })
          
      
      
      
    
      

}