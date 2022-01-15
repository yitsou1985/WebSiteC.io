const queryString_url_id = window.location.search;

// console.log( queryString_url_id)
const _ID =  queryString_url_id.slice(1)

// console.log(_ID);


// console.log(order);

const IDProduct = order.find((el)=>el._id===_ID)

  
console.log(IDProduct);

const PageProduct = document.querySelector(".container-Page-products")
console.log(PageProduct);

const Page_Display_Client = `

<img id="img" src=${IDProduct.Photo} width=20%></img>

<table class="order">
<tr>

<th>ID</th><br>
<th>Name</th>
<th>Adress</th>
<th>Item</th>
<th>Price</th>
<th>Qte</th>
<th>Note</th>
<th>Order</th>
<tr>
<td data-label=${IDProduct._id}>${IDProduct._id}</td>
<td data-label=${IDProduct.Name}>${IDProduct.Name}</td> 
<td data-label=${IDProduct.Adress}>${IDProduct.Adress}</td>
<td data-label=${IDProduct.Item}>${IDProduct.Item}</td>
<td data-label=${IDProduct.Price}>${IDProduct.Price}₪</td>
<td data-label=${IDProduct.qte}>${IDProduct.qte}</td>
<td data-label=${IDProduct.Note}>${IDProduct.Note}</td>
<td><button id="btn_send" type="submit" name="btn_send" onchange="onchangeSelect()"  >Add to the cart</button></td>
<td><select name="option_product" id="option_product" onchange="onchangeSelect()">
<option value="MP3">option MP3 </option>
<option value="MP4">option MP4  </option>
<option value="Ipod">option Ipod </option>
<option value="Iphone">option Iphone </option>
<option value="Radio">option Radio </option>
<option value="MP3Bluetooh">option MP3Bluetooh </option>
</select></td>
</tr>
</tr>
</table>


`

PageProduct.innerHTML = Page_Display_Client

const idForm = document.querySelector("#option_product")
console.log(idForm);

const btn_sendCart = document.querySelector("#btn_send")
console.log(btn_sendCart);

const Select_option = idForm.value


    btn_sendCart.addEventListener("click",(e)=>{
        e.preventDefault();
        
        
         Select_option 
         
        let optionValu = {
            Name:IDProduct.Name,
            ID_Product:IDProduct._id,
            option_product:IDProduct.Item,
            Price:IDProduct.Price,
            qte:1,
        }
        console.log(optionValu);
    
        
        //------------------------Local Storage------------------------------------>
        
        let ProductStorage = JSON.parse(localStorage.getItem("product"))
        
    const popupConf=()=>{
       if(window.confirm(`${IDProduct.Name} option ${IDProduct.Item} price ${IDProduct.Price}  add to the cart`)){
    window.location.href= "cart.html" 
       }else{
        window.location.href= "index.html" 
       } 
    }
    
        if(ProductStorage){
            ProductStorage.push(optionValu);
            localStorage.setItem("product", JSON.stringify(ProductStorage))
            popupConf()
        }else{
            ProductStorage=[];
            ProductStorage.push(optionValu)
            localStorage.setItem("product", JSON.stringify(ProductStorage))
            console.log(ProductStorage);
            popupConf()
        }
     })

//--------------------------------Display the new Product Cart with onchange="changeSoption()"------------------------>

// const onchangeSelect = ()=>{
//     const OnChangeSelect= document.getElementById("option_product").value
// //  document.getElementById("review").innerHTML = OnChangeSelect;
// }
