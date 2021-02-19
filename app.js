
let index = document.querySelectorAll('.list-item')


let prevBtn = document.querySelector(".left-button")
let nextBtn =document.querySelector(".right-button")
let nextUrl=null;
   let prevUrl = null;
//nextBtn.style.backgroundColor = "red"
let listItems = Array.from(index)

let fetch_config = {
    method:"GET",
    headers: 
   
  {
      "Content-Type": "application/json", 
  }
  }
  
  fetch('https://pokeapi.co/api/v2/pokemon?`offset=0&limit=20', fetch_config)
  

 .then(function(response) {

 
    return  response.json()
  
  .then(function (data){
    
    nextUrl = data.next;
    prevUrl = data.previous;
       
  let i=0
     
    index.forEach( element=> {
      let pokémonName=data.results[i].name
     element.innerHTML =pokémonName 
     i++
    });
      
    })
 
    
})

nextBtn.addEventListener('click',function (event){

fetch(nextUrl,fetch_config)
.then(function(response) {

 
  return  response.json()



  


.then(function (data){
  nextUrl = data.next;
  prevUrl = data.previous

 
let i=0
   
  index.forEach( element=> {
    let pokémonName=data.results[i].name
   element.innerHTML =pokémonName 
   i++
  });
    
  })

})

})



prevBtn.addEventListener('click',function(event){

fetch(prevUrl,fetch_config)

.then(function(response) {
 
  return  response.json()


.then(function (data){
  nextUrl = data.next
  prevUrl = data.previous;


 
let i = 0
   
  index.forEach( element=> {
    let pokémonName=data.results[i].name
   element.innerHTML =pokémonName 
   i++
  });
    
  })

})

})

 

// 2eme PARTIE POKEDEX
let screen = document.querySelector(".main-screen")

let type = document.querySelector(".stats__types")


let imgFront =document.querySelector(".screen__image")
let imgBack = document.querySelector(".poke-back-image")


let poknom = document.querySelector(".poke-name")
let ide = document.querySelector(".poke-id")

let type1 = document.querySelector('.poke-type-one')
let type2 = document.querySelector('.poke-type-two')

let weight =document.querySelector(".screen__stats")
let height = document.querySelector(".poke__height")

// FAIRE ADDEVENTLISTENER SUR TOUS LES NOM ET REMOVE CLAS
function removeColor(){
let typeColor =['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']

  for(let i=0;i<typeColor.length; i++){
let bgrColor = typeColor[i]
screen.classList.remove(bgrColor)
  }
}

function pokeInfo(){
let listItems = Array.from(document.getElementsByClassName("list-item"))
 


listItems.forEach( element=> {




element.addEventListener('click',function(){

screen.classList.remove('hide')
let nom = element.textContent
let pokUrl ="https://pokeapi.co/api/v2/pokemon/"+nom


// FETCH
fetch(pokUrl,fetch_config)


  .then(function(response){
   return response.json() 
  
  })
  .then(function(data){

 let myNom = data.name
 let myId = data.id

 poknom.textContent = myNom
 ide.textContent = `#00${myId}`

 
  let imageF = data.sprites.front_default
  let imageB =data.sprites.back_default

  
  imgFront.innerHTML =  `<div class="screen__image">
   <img src="${imageF}" class="poke-front-image" alt="front">
   <img src="${imageB}" class="poke-back-image" alt="back">
 </div>`

let myWeight = data.weight
let myHeight = data.height
weight.innerHTML = ` <div class="screen__stats">
  <p class="stats__weight">
  weight: <span class="poke-weight">${myWeight}</span>
  </p>
  <p class="stats__height">
  height: <span class="poke-height">${myHeight}</span>
  </p>
</div>`



let myType1 = data.types[0].type.name

type1.textContent = myType1


function type(){



if( data.types.length > 1){
  
let myType2 =  data.types[1].type.name
  type2.textContent = myType2
  type2.style.display = "block"

}else{
  myType2 = "";
  return type2.style.display = "none"
   }
}
type()
   //add color

function addColor(){ 
  color = data.types[0].type.name
  screen.classList.add(color)
}
//rappel fonction
 removeColor()
addColor()

console.log(color)
  })


}) 

 })
}
 pokeInfo()


 


  
  
  

 
 













    
       
    



  
   







    
       
    



  
   
