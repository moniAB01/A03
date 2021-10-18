let orange = document.querySelector("#clickme");

orange.addEventListener("click", clicked);

function clicked(event){
  let clickedbutton = event.target; //HTML Element 
  clickedbutton.style.backgroundColor = "pink";
  console.dir(event);
}
