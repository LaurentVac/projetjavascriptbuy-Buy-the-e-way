let cartIn = document.getElementById('cartIn');
cartIn.onclick = function() {

    let deleteModal = document.getElementById('mainModal');
    if (deleteModal.innerHTML != "") {
        console.log("delete modal");
        deleteModal.innerHTML = "";
    }

    rowCart.forEach((item, index) => {

        console.log("cart",rowCart);

        let picture = document.querySelector('#exampleObject .img-fluid');
        picture.src = rowCart[index].picture;
        console.log("picture", picture);

        let orderTitle = document.getElementById('orderTitle');
        orderTitle.innerHTML = rowCart[index].product;

        let price = document.getElementById('price');
        price.innerHTML = rowCart[index].price + '€';

        let quantity = document.getElementById('quantity');
        quantity.innerHTML = rowCart[index].quantity;
        console.log("qté", rowCart[index].quantity)

        clone = document.querySelector('#exampleObject').cloneNode(true);
        clone.id = rowCart[index].id;

        document.getElementById('mainModal').appendChild(clone);


    });

    

}