document.addEventListener('DOMContentLoaded', innit);
function innit() {
  console.log('DOM loaded and succesfully parsed!');
}

const liList = document.querySelectorAll('.nav > ul > li');
console.log(liList);

liList.forEach(element => {
  element.addEventListener('mouseover', function() {
    const submenu = element.querySelector('ul');

    if (submenu !== null) {
      console.log(`${submenu.innerText} moused over!`);
      submenu.style.display = 'list-item';
    }
  });
});

liList.forEach(element => {
  element.addEventListener('mouseout', function() {
    const submenu = element.querySelector('ul');
    if (submenu !== null) {
     submenu.style.display = 'none';
    }
  });
});
