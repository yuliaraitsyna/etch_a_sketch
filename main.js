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

const COLOURS = {
    Black: 6,
    Pink: 3,
    Yellow: 5,
    Green: 4,
    Blue: 2,
    Purple: 1
};

const colours = [];
for (let i = 1; i <= 6; i++) {
    let colour = document.getElementById("colour" + i);
    let colourEnum;
    switch (i) {
        case 1:
            colourEnum = 'Purple';
            break;
        case 2:
            colourEnum = 'Blue';
            break;
        case 3:
            colourEnum = 'Pink';
            break;
        case 4:
            colourEnum = 'Green';
            break;
        case 5:
            colourEnum = 'Yellow';
            break;
        case 6:
            colourEnum = 'Black';
            break;
        default:
            colourEnum = 'Black';
    }
    colours.push({ HTMLObject: colour, ColourValue: colourEnum });
}

function ColourChoice(event) {
    const colourDiv = event.currentTarget;
    colourDiv.style.border = "solid white 2px";
    colours.forEach(colour =>{
        if(colour.HTMLObject !== colourDiv)
        {
            colour.HTMLObject.style.border = "none";
        }
    });
}
colours.forEach(colour => {
    colour.HTMLObject.addEventListener('click', ColourChoice);
});
