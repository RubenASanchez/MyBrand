var button = document.getElementById('enterbutton');

button.addEventListener('click', function() {
    document.querySelector('#leftpanel').classList.toggle('move');
}
);



/*var myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('hiya');
}*/




/*function openMe() {
    var myTitle = document.getElementById('title1');
    myTitle.onclick = function() {
        myTitle.style.color = red;
    }
}*/

/*var panelsClosed = true;
var leftPanel = document.getElementById("leftpanel");
document.getElementById('title1').onclick = function() {
    if(panelsClosed) panelsClosed = true, leftPanel.style.left = '-50%';
    else panelsClosed = false, leftPanel.style.left = '-250%';
}*/