var rowCart = [];
var cart = [];

function addArticleInCart(id) {
    
    var elementId = id.replace('btn','').trim();

    fullCatalog.forEach((item, index) => {
        
         if(elementId == item.id) {
            
            if (rowCart.indexOf(fullCatalog[index]) == -1) {
                rowCart.push(fullCatalog[index]);
                console.log(rowCart);
                console.log("on rempli le panier");
            } else {
                rowCart[index].quantity += 1;
                console.log(rowCart[index].quantity);
                console.log("on additionne la quantité pour le meme objet",rowCart);
            }                
 } 
        
    });
      
};





