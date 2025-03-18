/*
DOM Events: Events are signals that something has occurred. (user inputs I actions)
    onclick (when an element is clicked)
    onmouseenter (when mouse enters an element)

    Event Listener: addEventListener
    element.addEventListener( event, callback )

this in Event Listeners: 
When 'this' is used in a callback of event handler of something, it refers to that something.

change event: The change event occurs when the value of an element has been changed (only works on cinput>,
and eselect> elements).

input event: The input event fires when the value of an , cselect> , or <textarea> element has been change


*/

//Create a button on the page using JavaScript. Add an eventlistener to the button that changes the button’s color to
// green when it is clicked and default when double clicked.
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.style.backgroundColor = "rgb(0, 255, 0)";
});

btn.addEventListener("dblclick", function () {
  this.style.backgroundColor = "white";
});

let inp = document.querySelector("input");
inp.addEventListener("input", function (event) {
  inp.value = inp.value.replace(/[^a-zA-Z\s]/g, "");
  let heading = document.querySelector("h1");
  heading.innerText = inp.value;
});
