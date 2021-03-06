function colorPicked() {
  let random = Math.floor( Math.random() * colors.length );
  return colors[random];
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generateRandomColors(num) {
  let arr = [];
  
  for (let i = 0; i < num; i++) {
    //Generating random RGB string
    let rgbString = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    arr.push(rgbString)
  }
  return arr;
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }  
  h1.style.background = 'steelblue';
  if (resetBtn.textContent = 'Play again') {
    resetBtn.textContent = 'New colors';
  }
  
  clickedColorRgb.textContent = '';
  clickedColorHex.textContent = '';
  messageDisplay.textContent = '';
}

function init() {
  //Easy and Hard buttons
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy'? numSquares = 3: numSquares = 6;
      reset();
    });
  }

  for (let i = 0; i < squares.length; i++) {
    //Event listeners
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
  
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetBtn.textContent = 'Play again';
      } else {
        this.style.background = '#232323';
        messageDisplay.textContent = 'Try again';
      }
      //Added color RGB/Hex values below, when clicked
      clickedColorRgb.textContent = `RGB value: ${clickedColor}`;
      clickedColorRgb.style.backgroundColor = `${clickedColor}`
      clickedColorHex.textContent = `Hex value: ${rgbToHex(clickedColor)}`;
      clickedColorHex.style.backgroundColor = `${rgbToHex(clickedColor)}`
    });
  }
  
  reset();
}

//DOM SELECTORS && VARIABLES
let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');
let clickedColorRgb =  document.querySelector('.clicked-color.rgb');
let clickedColorHex = document.querySelector('.clicked-color.hex');
let modeButtons = document.querySelectorAll('.mode');

colorDisplay.textContent = pickedColor;

resetBtn.addEventListener('click', function() {
  reset()
});

init();



