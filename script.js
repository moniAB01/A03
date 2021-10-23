let orange = document.querySelector("#clickme");
let mouse = document.querySelector("#pressed");
                       
orange.addEventListener("click", clicked);
mouse.addEventListener("click", pressed);


function clicked(event){
  let clickedbutton = event.target; //HTML Element 
  clickedbutton.style.backgroundColor = "lightblue";
  console.log("Nav Clicked!");
}
function pressed(){
  let mouse = event.target;
  mouse.style.backgroundColor = "darkblue";
  console.log("mouse");
}


function revealMessage(){
  document.getElementById("hiddenMessage").style.display='block';
}
function revealMessage1(){
  document.getElementById("hiddenMessage1").style.display='block';
}
function revealMessage2(){
  document.getElementById("hiddenMessage2").style.display='block';
}
//fetch api

fetch('https://ghoapi.azureedge.net/api/Dimension' apiKey='20211024101859', {
  method: 'Post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  name: 'covid 1'
})
})
.then(res => {
  
 return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('error'))