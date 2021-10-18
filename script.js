let orange = document.querySelector("#clickme");


                       
orange.addEventListener("click", clicked);
revealMessage.addEventListener("clicked", clicked); 

function clicked(event){
  let clickedbutton = event.target; //HTML Element 
  clickedbutton.style.backgroundColor = "lightblue";
  console.dir(event);
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
function colorbutton(event){
  let clickedbutton = event.target; //HTML Element 
  clickedbutton.style.backgroundColor = "darkblue";
  console.dir(event);
}
