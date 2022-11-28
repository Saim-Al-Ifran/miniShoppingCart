const increment = document.getElementById("increment"); 
const mobileMainPrice  = parseFloat(document.getElementById("mobilePrice").innerText);

const mobileQuantity = parseFloat(document.getElementById("mobileQuantity").value);



const quantityValidation = (validateQuantity,decrementId)=>{
     if(validateQuantity <= 1){
          document.getElementById(decrementId).setAttribute("disabled",true);
     }
}

quantityValidation(mobileQuantity,"decrement");


// increment quantity event handler 
increment.addEventListener("click",function(){
  
      calculateProduct("mobileQuantity","mobilePrice",mobileMainPrice,"decrement")

});


// decrement quantity event hanlder 
const decrement = document.getElementById("decrement");

decrement.addEventListener("click",function(){

     decrementProduct("mobileQuantity","mobilePrice",mobileMainPrice,"decrement")
     // validateQuantity(decrementNumber);
 
})

const decrementProduct = (quantity,price,proudctMainPrice,decrementId) =>{
     const MobileQuantity = parseFloat(document.getElementById(quantity).value);
     const newPrice = parseFloat(document.getElementById(price).innerText);

     
     const decrementNumber = MobileQuantity -1;
     validateQuantity(decrementNumber,decrementId);

     document.getElementById(quantity).value = decrementNumber;
     document.getElementById(price).innerText = newPrice - proudctMainPrice;
}


// funtion to calculate  proudct and price
const calculateProduct = (quantity,price,proudctMainPrice,decrementId) =>{
     const mobileQuantity = document.getElementById(quantity).value;
     let   mobileQuantityNumber = parseFloat(mobileQuantity);
     
     let incrementNumber = 1 + mobileQuantityNumber;
     
     validateQuantity(incrementNumber,decrementId);
     document.getElementById(quantity).value = incrementNumber;
     document.getElementById(price).innerText = incrementNumber * proudctMainPrice;
}

// validation on increment and decrement button
const  validateQuantity = (reciveQuantity,decrementBtn) =>{
     //  console.log(reciveQuantity,x);
     if( reciveQuantity <= 1){
          document.getElementById(decrementBtn).setAttribute("disabled",true);
     }
     if(reciveQuantity > 1){
          document.getElementById(decrementBtn).removeAttribute("disabled");
     }

}



// iPhone 11 Silicone Case - Black

const caseIncrement = document.getElementById("caseIncrement");
const caseMainPrice  = parseFloat(document.getElementById("casePrice").innerText);
const caseQuantity = parseFloat(document.getElementById("caseQuantity").value);
// console.log(caseQuantity);
quantityValidation(caseQuantity,"caseDecrement");

caseIncrement.addEventListener("click",function(){     
     calculateProduct("caseQuantity","casePrice",caseMainPrice,"caseDecrement");
});

// Decrement button event hanlder 
const caseDecrement = document.getElementById("caseDecrement");

caseDecrement.addEventListener("click",function(){
     decrementProduct("caseQuantity","casePrice",caseMainPrice,"caseDecrement")
     
});





 