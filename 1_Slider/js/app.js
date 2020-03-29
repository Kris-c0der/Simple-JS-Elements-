document.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("DOM loaded and succesfully parsed!");

  const buttonPrev = document.getElementById("prevPicture");
  const buttonNext = document.getElementById("nextPicture");
  const liElements = document.querySelector("ul").children;
  const imgArray = [...liElements];

  let index = 0;
  imgArray[index].classList.add("visible");

  buttonPrev.addEventListener("click", function() {
    console.log("Click! Prev button is working!");
    imgArray[index].classList.toggle("visible");
    index--;
    if (index < 0 ) {
        index = imgArray.length -1;
      }
    imgArray[index].classList.toggle("visible");
  }); //End click listener.

  buttonNext.addEventListener("click", function() {
    console.log("Click! Next button is working!");

    imgArray[index].classList.toggle("visible");
    index++;
    if (index >= imgArray.length) {
      index = 0;
    }
    imgArray[index].classList.toggle("visible");
  }); //End click listener.
} //End init.
