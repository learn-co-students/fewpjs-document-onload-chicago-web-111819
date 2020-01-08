document.addEventListener('DOMContentLoaded', function() {
    // console.log("The DOM has loaded")
    changeText()
});

function changeText() {
    text1 = document.getElementById('text')
    .innerHTML = 'This is really cool!'

}