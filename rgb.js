//Create variable for the element i want to make a button
var generateColour = document.getElementById('button');
//What will happen when the button is clicked
generateColour.onclick = () => {
    rgb = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    document.getElementById('colour').innerHTML = `Background Colour: ${rgb}`;
    document.body.style.backgroundColor = `${rgb}`;
}

//Just a test to make the nav bar links change colour
let hoverColour = document.getElementById('esh');

hoverColour.addEventListener("mouseenter", function(event) {
    rgb = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    event.target.style.color = `${rgb}`; 
}, false);