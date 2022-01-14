

let _Id = [];
let NAME = [];
let ADRESS = [];
let ITEM = [];
let PRICE =[];
let QTE=[];
let NOTE=[];
let PoductsStructur="";
let i =[];

const DisplayProduct=(order)=>{
    const Elements = document.querySelector(".container-products")
    console.log(Elements);

    for(i=0;i<order.length;i++){
            order.forEach((element,i)=>{
            _Id[i]= element._id;
            NAME[i]=element.Name;
            ADRESS[i]=element.Adress;
            ITEM[i]=element.Item;
            PRICE[i]=element.Price;
            QTE[i]=element.qte;
            NOTE[i]=element.Note;
            })
            PoductsStructur =
              PoductsStructur +
              `
            
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
                        <td>${_Id[i]}</td>
                        <td>${NAME[i]}</td> 
                        <td>${ADRESS[i]}</td>
                        <td>${ITEM[i]}</td>
                        <td>${PRICE[i]}₪</td>
                        <td>${QTE[i]}</td>
                        <td>${NOTE[i]}</td>
                          <td><button><a href="Product.html?${_Id[i]}">Click</button></a></td>
                        
                        </tr>
                    </tr>
                </table>
               
                `;
                
                    
            Elements.innerHTML=PoductsStructur
            // console.log(PoductsStructur);
    }
   
}


window.onload=()=>{

    DisplayProduct(order)
}