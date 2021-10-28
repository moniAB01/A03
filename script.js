let orange = document.querySelector("#clickme");
let mouse = document.querySelector("#pressed");

                       
orange.addEventListener("click", clicked);
mouse.addEventListener("click", pressed);
document.addEventListener("scroll", scrolled);



function clicked(event){ // tells you when the nav bar has been clicked
  let clickedbutton = event.target; //HTML Element 
  clickedbutton.style.backgroundColor = "lightblue";
  console.log("Nav Clicked!"); 
}
function pressed(){ // changes the button color on the hidden messages button (below) is pressed
  let mouse = event.target;
  mouse.style.backgroundColor = "darkblue";
  console.log("mouse"); // event displayed in console
}


function revealMessage(){  // the 3 functions below are buttons that reveal hidden figures once pressed. connected to html
  document.getElementById("hiddenMessage").style.display='block';
}
function revealMessage1(){
  document.getElementById("hiddenMessage1").style.display='block';
}
function revealMessage2(){
  document.getElementById("hiddenMessage2").style.display='block';
}

function scrolled(event){ // event created to see scrolling on webpage
    console.log("SCROLLED");
}

function vaccine() { // eligilble checker in payment segment
let age = document.getElementById("age").value;
let eligible = (age < 12) ? "You are not ":"You are";
  document.getElementById("vaccineage").innerHTML = eligible + " eligible to be vaccinated";
}



const text = document.querySelector(".tape"); // movement of words at top of page
const strText = text.textContent;
const splitText = strText.split("");
text.textContent ="";
for(let i=0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char =0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
  console.log("runthrough")
}

function complete(){
  clearInterval(timer);
  timer = null;
  console.log("secondtime")
} // this completes the loop created
