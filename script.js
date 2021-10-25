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

function movingwords(){
  let x = new Array();
  let y= new Array();
  let nummoving= 50;
  document.getElementById("tapeAtTop").style.display='block';
  for(let i=0; i<nummoving; i++){
    x[i]++
    if(x[i]>200){
      x[i]=0;
    }
  }
}

const text = document.querySelector(".tape");
const text2 = text.textContent;
const spliting = text2.split("");
text.textContent ="";
for(let i=0; i < spliting.length; i++){
  text.innerHTML += "<span>" + spliting[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectoryAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === spliting.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}