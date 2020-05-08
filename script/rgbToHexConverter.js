function rgbToHex(rgb) {
  let arr = rgb.match(/\d+/g);
  let hexMap = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  };

  let str = '#';

  for (let ele of arr) {
    //RGB to Hex conversion calculation
    let divided = ele / 16;
    let decimal = divided % 1;
    divided = parseInt(divided);
    decimal *= 16;

    if (divided > 9) {
      divided = hexMap[divided];
    }
    if (decimal > 9) {
      decimal = hexMap[decimal];
    }
    
    str += `${divided}${decimal}`;
  }
  //Output
  return str;
}

// console.log(rgbToHex('rgb(95, 203, 131)'));