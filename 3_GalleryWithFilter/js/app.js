document.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("DOM loaded and parsed succesfully!");

  const imgs = document.getElementById("gallery").children;
  const hideButton = document.getElementById("hideButton");
  const showButton = document.getElementById("showButton");
  const tagInput = document.getElementById("tagInput");

  hideButton.addEventListener("click", function() {
    const text = tagInput.value;
    console.log(text);
    tagInput.value = null;
    
    [...imgs].forEach(img => {
      const allTags = img.dataset.tag;

      img.classList.remove("invisible");
      const selectedTag = allTags.indexOf(text);
      
      if (selectedTag > -1) {
        img.classList.add("invisible");
      }
    });
  });

  showButton.addEventListener("click", function() {
    const text = tagInput.value;
    console.log(text);
    tagInput.value = null;

    [...imgs].forEach(img => {
      const allTags = img.dataset.tag;

      img.classList.add("invisible");
      const selectedTag = allTags.indexOf(text);

      if (selectedTag > -1) {
        img.classList.remove("invisible");
      }
    });
  });
} //End DOM init.
