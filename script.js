const sketchPad = document.querySelector(".sketchPad");
const pickedSize = document.querySelector("#pickedSize");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#colorPicker");
const erase = document.querySelector("#erase");

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
  size.textContent = `${pickedSize.value} X ${pickedSize.value}`;
  drawGrid(pickedSize.value);
});

//Setup the erase button
erase.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  //   console.log(erase.getAttribute("class"));
});

//Change the color of the square on mouseover
sketchPad.addEventListener("mouseover", (e) => {
  // to prevent the change of the background of the sketchpad
  if (e.target !== sketchPad) {
    // console.log(erase.getAttribute("class"));
    //change the background color of the square with the color picked
    e.target.style.backgroundColor = colorPicker.value;
    // if the erase button is active
    if (erase.getAttribute("class") === "active") {
      // remove the background color
      e.target.style.backgroundColor = "#ffffff";
      //console.log(e.target);
    }
  }
});

//On page load
window.addEventListener("load", () => {
  size.textContent = `${pickedSize.value} X ${pickedSize.value}`;
  drawGrid(pickedSize.value);
});
