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


async function getUsers(){
  let response = await fetch('https://app.powerbi.com/view?r=eyJrIjoiZTY4NTI1NzQtYTBhYy00ZTY4LTk3NmQtYjBjNzdiOGMzZjM3IiwidCI6ImI0NmMxOTA4LTAzMzQtNDIzNi1iOTc4LTU4NWVlODhlNDE5OSJ9');
  let data = await response.json()
  return data;
}
getUsers().then(data => console.log(data));