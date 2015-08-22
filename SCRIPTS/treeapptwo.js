document.getElementById("more").onclick = function () {
    var ok = true;

     if (ok === true) {
         var newDiv = document.createElement('div');

         newDiv.className = 'newdragme';
         newDiv.draggable = "true";
         /*newDiv.style.backgroundColor = "black";*/        /*styles i put in style sheet*/
         
         var thisDiv = document.getElementById("puthere");
         thisDiv.insertBefore(newDiv,thisDiv.firstChild)    /*inserts div inside puthere*/
         /*document.body.insertBefore(newDiv,thisDiv);*/    /*inserts div after more*/
    }
};


/*
document.getElementById("less").onclick = function () {     attempting to make a delete option, but this needs to work per selected div
    var del = true;
    
    if (del === true) {
        var node = document.getElementById("newdragme");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
}
*/


function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('dragme');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dm = document.getElementById('dragme'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false);


