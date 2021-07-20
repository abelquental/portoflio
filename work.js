listBtn.addEventListener('click', openList);
listBtn2.addEventListener('click', openList);



function mouseOut() {
    document.querySelector('.work-list-img-container').style.backgroundImage = "url('')";
};

function overNOBODY() {
    document.querySelector('.work-list-img-container').style.backgroundImage = "url('/image/work/nobody-1.jpg')";
};

function overDaily() {
    document.querySelector('.work-list-img-container').style.backgroundImage = "url('/image/work/tdpt-1.jpg')";
};

function overAPIP() {
    document.querySelector('.work-list-img-container').style.backgroundImage = "url('/image/work/apip-1.jpg')";
};
