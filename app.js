 let index = document.querySelectorAll('.list-item')
let ecran = document.querySelector('.main-section__black')

let prevBtn = document.querySelector(".left-button")
let nextBtn =document.querySelector(".right-button")
let nextUrl=null;
   let prevUrl = null;
//nextBtn.style.backgroundColor = "red"
 let listItems = Array.from(document.getElementsByClassName("list-item"))

let fetch_config = {
    method:"GET",
    headers: 
   
  {
      "Content-Type": "application/json", 
  }
  }
  
  fetch('https://pokeapi.co/api/v2/pokemon?`${offset}=0&limit=20', fetch_config)

 .then(function(response) {

 
    return  response.json()
  
  .then(function (data){
    nextUrl = data.next;
    prevUrl = data.previous;
       
 // for (let i = 0; i < data.results.length; i++) { 
   // console.log(data.results[i].name)

   
  let i=0
     
    index.forEach( element=> {
      let pokémonName=data.results[i].name
     element.innerHTML =pokémonName 
     i++
    });
      
    })
 
    
})

.catch(function(error){
console.log(error)

})

nextBtn.addEventListener('click',function (event){

fetch(nextUrl,fetch_config)
.then(function(response) {

 
  return  response.json()


.then(function (data){
  nextUrl = data.next;
 
let i=0
   
  index.forEach( element=> {
    let pokémonName=data.results[i].name
   element.innerHTML =pokémonName 
   i++
  });
    
  })

})

})


/*prevBtn.addEventListener('click',function(event){

fetch(prevUrl,fetch_config)
.then(function(response) {

 
  return  response.json()


.then(function (data){
  prevUrl = data.previous;



 
let i=0
   
  index.forEach( element=> {
    let pokémonName=data.results[i].name
   element.innerHTML =pokémonName 
   i++
  });
    
  })

})

})*/






    
       
    



  
   
