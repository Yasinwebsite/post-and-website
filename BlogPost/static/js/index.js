
document.addEventListener('DOMContentLoaded', function () {
  const counterDisplay = document.getElementById('counterDisplay');
  const incrementButton = document.getElementById('incrementButton');
  const likeInput = document.getElementById('likeInput');

  if (!counterDisplay || !incrementButton || !likeInput) return;

  let count = parseInt(counterDisplay.textContent || '0', 10);

  function incrementCounter(event) {
    event.preventDefault();

    count++;
    counterDisplay.textContent = count;
    likeInput.value = count; 

  }

  incrementButton.addEventListener('click', incrementCounter);
});