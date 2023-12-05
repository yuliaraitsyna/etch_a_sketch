const header = document.getElementById("header");
header.innerHTML = "ETCH-A-SKETCH";
const eraseButton = document.getElementById("erase");
eraseButton.innerHTML = "erase";
const clearButton = document.getElementById("clear");
clearButton.innerHTML = "clear";
const slider = document.getElementById("slider");
slider.value = 2;

function ChangeSliderValue()
{
    let percentage = (slider.value - slider.min) * 100 / (slider.max - slider.min);
    slider.style.backgroundSize = percentage + '% 100%';
    const size = document.getElementById('size');
    size.innerHTML = slider.value + ' x ' + slider.value;
}
slider.addEventListener('input', ChangeSliderValue);