let orange = document.querySelector("#clickme");
let mouse = document.querySelector("#pressed");

                       
orange.addEventListener("click", clicked);
mouse.addEventListener("click", pressed);
document.addEventListener("scroll", scrolled);



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

function scrolled(event){
    console.log("SCROLLED");
}

function vaccine() {
let age = document.getElementById("age").value;
let eligible = (age < 12) ? "You are not ":"You are";
  document.getElementById("vaccineage").innerHTML = eligible + " eligible to be vaccinated";
}