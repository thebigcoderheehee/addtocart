let cartCount=0;
let cartItems=[];


function addtocart(name,image,price){
    cartCount++;
    document.getElementById("cart-count").textContent=cartCount;
    const item={name,image,price};
    cartItems.push(item);
    updatecartdisplay();
}
function updatecartdisplay(){
    const cartitemcontainer = document.getElementById("cart-items")
    cartitemcontainer.innerHTML=""
    cartItems.forEach((item)=>{
        const cartItem=document.createElement("div")
        cartItem.classList.add("cart-item")


        cartItem.innerHTML=`
        <img src="${item.image}" alt="${item.name}">
    <div class="cart-item-details">
        <p class="cart-item-title">${item.name}</p>
        <p class="cart-item-price">${item.price}</p>
    </div>
        `;
        cartitemcontainer.appendChild(cartItem);
    })
}