document.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("DOM loaded and succesfully parsed!");

  const imgs = document.querySelectorAll("img");
  const body = document.querySelector("body");

  imgs.forEach(img => {
    img.addEventListener("click", function() {
      const url = img.getAttribute("src");

      const newDiv = document.createElement("div");
      newDiv.classList.add("fullScreen");

      const newImg = document.createElement("img");
      newImg.setAttribute("src", url);

      const newButton = document.createElement("button");
      newButton.classList.add("close");
      newButton.innerText = "close";

      newDiv.appendChild(newImg);
      newDiv.appendChild(newButton);
      body.appendChild(newDiv);

      newButton.addEventListener("click", function() {
        // newDiv.parentElement.removeChild(newDiv); alternative way
        body.removeChild(newDiv);
      });
    });
  });
} //End init.
