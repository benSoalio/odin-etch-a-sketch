const sketchPad = document.querySelector(".sketchPad");
const pickedSize = document.querySelector("#pickedSize");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#colorPicker");
const erase = document.querySelector("#erase");
const randomColor = document.querySelector("#randomColor");

// function to draw the grid with size as input
function drawGrid(size) {
  //clean the sketch pad
  while (sketchPad.hasChildNodes()) {
    sketchPad.removeChild(sketchPad.firstChild);
  }

  // determine the width (border included) of the square =
  const widthSquare = 500 / size; //(width of sketchPad)/ size
  // add the squares to the sketchpad
  for (let i = 0; i < size * size - 1; i++) {
    // Create a div element
    const div = document.createElement("div");
    //add the class of square
    div.classList.add("square");
    //set the width of the element
    //console.log(widthSquare);
    div.style.width = `${widthSquare - 1}px`;
    // set the border with size
    div.style.border = "0.5px solid black";
    //add div to the sketch pad
    sketchPad.appendChild(div);
  }
}

// Draw the grid depend on the size selected
pickedSize.addEventListener("change", () => {
  randomColor.classList.remove("active");
  erase.classList.remove("active");
  size.textContent = `${pickedSize.value} X ${pickedSize.value}`;
  drawGrid(pickedSize.value);
});

//Setup the erase button
erase.addEventListener("click", (e) => {
  //deactivate the random
  randomColor.classList.remove("active");
  // if erase button non activate, activate it
  e.target.classList.toggle("active");
});

// setup the random button
randomColor.addEventListener("click", (e) => {
  //deactivate the erase button
  erase.classList.remove("active");
  //if random button non activate, activate it
  e.target.classList.toggle("active");
});
//Color picker event listener
colorPicker.addEventListener("click", () => {
  //deactivate the erase button
  erase.classList.remove("active");
  //deactivate the random
  randomColor.classList.remove("active");
});
//Change the color of the square on mouseover
sketchPad.addEventListener("mouseover", (e) => {
  // to prevent the change of the background of the sketchpad
  if (e.target !== sketchPad) {
    //change the background color of the square with the color picked
    e.target.style.backgroundColor = colorPicker.value;
    // if the erase button is active
    if (erase.getAttribute("class") === "active") {
      // remove the background color
      e.target.style.backgroundColor = "#ffffff";
    }
    if (randomColor.getAttribute("class") === "active") {
      let rValue = Math.floor(Math.random() * 255);
      let gValue = Math.floor(Math.random() * 255);
      let bValue = Math.floor(Math.random() * 255);
      e.target.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
    }
  }
});

//On page load
window.addEventListener("load", () => {
  size.textContent = `${pickedSize.value} X ${pickedSize.value}`;
  drawGrid(pickedSize.value);
});
