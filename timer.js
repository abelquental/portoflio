update();

function update() {

    var date2 = new Date(); 
    var date1 = new Date('Wed Feb 3 2021 10:03:00')

    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    var difference_ms = date2_ms - date1_ms;

    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    } else {
        seconds = Math.floor(difference_ms % 60);
    };

    
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    } else {
        minutes = Math.floor(difference_ms % 60);
    };

    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms);
    if (hours < 10) {
        hours = '0' + hours;
    } else {
        hours = Math.floor(difference_ms % 60);
    };





    var text = ' Last updated: ' + hours + '(hours) ' + minutes + '(minutes) ' + seconds + '(seconds) ago';

    
    var timer = document.querySelector('.timer');

    timer.innerHTML = (text);
    

}

setInterval(update, 1000);


