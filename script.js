let orange = document.querySelector("#clickme");
let mouse = document.querySelector("#pressed");
                       
orange.addEventListener("click", clicked);

function clicked(event){
  let clickedbutton = event.target; //HTML Element 
  clickedbutton.style.backgroundColor = "lightblue";
  console.log("Nav Clicked!");
}

function mousePressed() {
  console.log("Clicked!");
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


