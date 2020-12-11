//Create variable for the element i want to make a button
var generateColour = document.getElementById('button');

//16 Options

//What will happen when the button is clicked
generateColour.onclick = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var hexNum = `#${hex[Math.floor(Math.random()*16)]}${hex[Math.floor(Math.random()*16)]}${hex[Math.floor(Math.random()*16)]}${hex[Math.floor(Math.random()*16)]}${hex[Math.floor(Math.random()*16)]}${hex[Math.floor(Math.random()*16)]}`;
    document.getElementById('colour').innerHTML = `Background Colour: ${hexNum}`;
    document.body.style.backgroundColor = `${hexNum}`;
}

//Just a test to make the nav bar links change colour
let hoverColour = document.getElementById('esh');

hoverColour.addEventListener("mouseenter", function(event) {
    rgb = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    event.target.style.color = `${rgb}`; 
}, false);