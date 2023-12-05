const header = document.getElementById("header");
header.innerHTML = "ETCH-A-SKETCH";
const eraseButton = document.getElementById("erase");
eraseButton.innerHTML = "erase";
const clearButton = document.getElementById("clear");
clearButton.innerHTML = "clear";
const slider = document.getElementById("slider");
slider.value = 2;
const field = document.getElementById("field");

function ChangeSliderValue()
{
    let percentage = (slider.value - slider.min) * 100 / (slider.max - slider.min);
    slider.style.backgroundSize = percentage + '% 100%';
    const size = document.getElementById('size');
    size.innerHTML = slider.value + ' x ' + slider.value;
    SetUpGrid(slider.value);
}

slider.addEventListener('input', ChangeSliderValue);

function SetUpGrid(size)
{
    removeCells();
    field.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    field.style.gridTemplateRows = (`repeat(${size}, 1fr`);
    for (let i = 0; i < size * size; i++)
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        field.appendChild(cell);
    }
}
function removeCells() {
    while(field.firstChild) {
      field.removeChild(field.firstChild);
    }
  }
  SetUpGrid(2);