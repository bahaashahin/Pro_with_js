var allproducts=document.querySelectorAll("#elemnts li")
var divcontent=document.querySelector("#cont-price")
var button=document.querySelector("#btn")
var content=document.querySelector("#price")
var toataprice=0

allproducts.forEach(function(item){ 
  item.onclick=function(){
    divcontent.innerHTML+=item.textContent+" +  "  
    toataprice+=+(item.getAttribute("price"))
    if(divcontent.html!=""){
      button.style.display="block"
    }
  }
})
button.onclick=function(){
    content.innerHTML=toataprice
}