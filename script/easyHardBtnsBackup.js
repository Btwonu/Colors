//Buttons
//Easy
// easyBtn.addEventListener('click', function() {
//   hardBtn.classList.remove('selected');
//   easyBtn.classList.add('selected');
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = colorPicked();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
// });
// //Hard
// hardBtn.addEventListener('click', function() {
//   easyBtn.classList.remove('selected');
//   hardBtn.classList.add('selected');
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = colorPicked();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = 'block';
//   }
// });