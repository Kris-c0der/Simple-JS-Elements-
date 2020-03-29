document.addEventListener('DOMContentLoaded', init());
function init() {
  console.log('DOM Loaded and succesfully parsed');
}

const tooltipList = document.querySelectorAll('.tooltip');

tooltipList.forEach(span => {
  span.addEventListener('mouseover', function() {
    const newSpan = document.createElement('span');
    span.appendChild(newSpan);
    newSpan.classList.add('tooltipText');
    newSpan.innerText = span.dataset.text;
  });
});

tooltipList.forEach(span => {
  span.addEventListener('mouseout', function() {
    span.removeChild(span.firstElementChild);
  });
});
