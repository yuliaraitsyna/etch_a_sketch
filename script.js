const header = document.getElementById("header");
header.innerHTML = "ETCH-A-SKETCH";
const eraseButton = document.getElementById("erase");
eraseButton.innerHTML = "erase";
const clearButton = document.getElementById("clear");
clearButton.innerHTML = "clear";
const slider = document.getElementById("slider");
slider.value = 2;
const field = document.getElementById("field");
let currentColour;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

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
        cell.addEventListener('mouseover', ChangeColour);
        cell.addEventListener('mousedown', ChangeColour);
        field.appendChild(cell);
    }
}
function ChangeColour(e)
{
    if (e.type === 'mouseover' && !mouseDown) return;
    e.currentTarget.style.backgroundColor = currentColour;
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
    let hex;
    switch (i) {
        case 1:
            colourEnum = 'Purple';
            hex = "#9745FF";
            break;
        case 2:
            colourEnum = 'Blue';
            hex = "#82A5FF";
            break;
        case 3:
            colourEnum = 'Pink';
            hex = "#FE7DDA";
            break;
        case 4:
            colourEnum = 'Green';
            hex = "#94CC86";
            break;
        case 5:
            colourEnum = 'Yellow';
            hex = "#EFE37D";
            break;
        case 6:
            colourEnum = 'Black';
            hex = "#000000";
            break;
        default:
            colourEnum = 'Black';
            hex = "#000000";
    }
    colours.push({ HTMLObject: colour, ColourValue: colourEnum, HEX:hex});
}

function ColourChoice(e) {
    const colourDiv = e.currentTarget;
    eraseButton.style.border="none";
    colourDiv.style.border = "solid white 2px";
    colours.forEach(colour =>{
        if(colour.HTMLObject !== colourDiv)
        {
            colour.HTMLObject.style.border = "none";
        }
        else
        {
            currentColour = colour.HEX;
        }
    });
}
eraseButton.addEventListener('click', () =>
{
    eraseButton.style.border = "solid white 2px";
    currentColour="#FFFFFF";
    colours.forEach(colour =>
        {
            colour.HTMLObject.style.border ="none";
        })
});
clearButton.addEventListener('click',()=>
{
    field.innerHTML = '';
    SetUpGrid(slider.value);
});
colours.forEach(colour => {
    colour.HTMLObject.addEventListener('click', ColourChoice);
});

