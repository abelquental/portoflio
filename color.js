
const color = ["ececec", "ffffcc", "ffcccc", "ccffff", "ccffcc"];
const random = Math.floor(Math.random() * color.length);


window.addEventListener('load', function() {
    document.body.style.backgroundColor = '#' + color[random];
})