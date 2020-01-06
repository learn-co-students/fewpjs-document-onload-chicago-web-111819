function changeText(){
    let toChange = document.getElementById('text');
    toChange.innerHTML= "This is really cool!";
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeText();
});




//   console.log("yo")

// input.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });

// function addingEventListener(eventOf, callbackFunction) {
//     const input = document.getElementById('input');
// input.addEventListener(eventOf, callbackFunction);
// }