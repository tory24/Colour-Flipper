//Variable for rgb and hex button
var rgbColourCode = document.getElementById('rgb');
var hexColourCode = document.getElementById('hex');
//Variable for colour randomiser button
var generateColour = document.getElementById('button');
//Array for possible hex values
const hexVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//Global variables for Hex and RGB values
var rgb = [255, 255, 255];
var hexNum = '';

/*** Conversion Functions ***/
//Hex to RGB Conversion
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result) {
      rgb[0] = parseInt(result[1], 16);
      rgb[1] = parseInt(result[2], 16);
      rgb[2] = parseInt(result[3], 16);
    }
}

//RGB to Hex Conversion
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    hexNum = ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
}



/*** Onclick functions ***/
//On RGB Button Click
rgbColourCode.onclick = () => {
    //If hex class is set to active, change classnames & convert to rgb
    if(!rgbColourCode.classList.contains('active')) {
        rgbColourCode.className = 'active';
        hexColourCode.className = 'esh';
        hexToRgb(hexNum);
        document.getElementById('colour').innerHTML = `Background Colour: RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }
};

//On Hex Button Click
hexColourCode.onclick = () => {
    //If RGB class is set to active, change classnames & convert to rgb
    if(!hexColourCode.classList.contains('active')) {
        hexColourCode.className = 'active';
        rgbColourCode.className = 'esh';
        rgbToHex(rgb[0], rgb[1], rgb[2]);
        document.getElementById('colour').innerHTML = `Background Colour: ${hexNum}`;
    }
}

//Generates a random colour & changes HTML accordingly onclick
generateColour.onclick = () => {
    if(rgbColourCode.classList.contains('active')) {
        rgb[0] = Math.floor(Math.random()*256);
        rgb[1] = Math.floor(Math.random()*256);
        rgb[2] = Math.floor(Math.random()*256);
        document.getElementById('colour').innerHTML = `Backgroud Colour: RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        document.body.style.backgroundColor = `RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

    } else if (hexColourCode.classList.contains('active')) {
        hexNum = `#${hexVals[Math.floor(Math.random()*16)]}${hexVals[Math.floor(Math.random()*16)]}${hexVals[Math.floor(Math.random()*16)]}${hexVals[Math.floor(Math.random()*16)]}${hexVals[Math.floor(Math.random()*16)]}${hexVals[Math.floor(Math.random()*16)]}`;
        document.getElementById('colour').innerHTML = `Background Colour: ${hexNum}`;
        document.body.style.backgroundColor = `${hexNum}`;  
    }
}



/*** Highlights clickable navbar button **/
/*
//Variable for each navbar item
var hoverColour = document.getElementsByClassName('esh');

hoverColour[0].onmouseover = function(e) {
    this.style['color'] = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`; 
}
*/