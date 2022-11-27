const increment = document.getElementById("increment"); 
const mobileMainPrice  = parseFloat(document.getElementById("mobilePrice").innerText);

const mobileQuantity = parseFloat(document.getElementById("mobileQuantity").value);
if(mobileQuantity <= 1){
     document.getElementById("decrement").setAttribute("disabled",true);
}


// increment quantity event handler 
increment.addEventListener("click",function(){
  
      calculateProduct("mobileQuantity","mobilePrice")

});


// decrement quantity event hanlder 
const decrement = document.getElementById("decrement");

decrement.addEventListener("click",function(){
     console.log(mobileQuantity)
     const MobileQuantity = parseFloat(document.getElementById("mobileQuantity").value);
     const newPrice = parseFloat(document.getElementById("mobilePrice").innerText);

     
     const decrementNumber = MobileQuantity -1;
     validateQuantity(decrementNumber)

     document.getElementById("mobileQuantity").value = decrementNumber;
     document.getElementById("mobilePrice").innerText = newPrice - mobileMainPrice;


})


// funtion to calculate  proudct and price
function calculateProduct(quantity,price){
     const mobileQuantity = document.getElementById(quantity).value;
     let   mobileQuantityNumber = parseFloat(mobileQuantity);
     
     let incrementNumber = 1 + mobileQuantityNumber;

     validateQuantity(incrementNumber);
     document.getElementById(quantity).value = incrementNumber;
     document.getElementById(price).innerText = incrementNumber * mobileMainPrice;
}

function validateQuantity(reciveQuantity){
     if( reciveQuantity <= 1){
          document.getElementById("decrement").setAttribute("disabled",true);
     }
     if(reciveQuantity > 1){
          document.getElementById("decrement").removeAttribute("disabled");
     }

}



 