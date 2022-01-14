let ProductStorage = JSON.parse(localStorage.getItem("product"))

//--------------------------------Display Product Cart------------------------>
const PageCart = document.querySelector("#container-cart")

if(ProductStorage===null){
const EmptyCart=
`
<div class="container-empty-cart">
<div>The cart is Empty</div>
</div>
`
PageCart.innerHTML= EmptyCart

}else{
let ProductCart = [];
    for(j=0; j<ProductStorage.length; j++ ){
        // console.log(ProductStorage.length);
        ProductCart=ProductCart + `
        <table>
        <tr>
        
        <div class="container review">
        <th><div>${ProductStorage[j].Name} </div><div>Quantity 1 -Product:${ProductStorage[j].option_product}</div></th>
        <th><div>${ProductStorage[j].Price}₪- <button class="btn_delete" >Delete Item</button> </div></th>

    </div>
    </tr>
    </table>
        `
    }
        if(j == ProductStorage.length){
            PageCart.innerHTML = ProductCart
        }
    }

let btn_delete=document.querySelectorAll(".btn_delete")
console.log(btn_delete);

for(let k=0; k < btn_delete.length;k++){
    btn_delete[k].addEventListener("click",(e)=>{
        e.preventDefault()
        let id_Delete = ProductStorage[k].ID_Product;
        console.log(id_Delete);

        ProductStorage = ProductStorage.filter(el => el.ID_Product !== id_Delete )
        // console.log( ProductStorage);
        localStorage.setItem(
            "product",
            JSON.stringify(ProductStorage)
        )
        alert("The Item was Delete")
        window.location.href= "cart.html"
    })

}
//--------------------------------Display the new Product Cart with onchange="changeSoption()"------------------------>


