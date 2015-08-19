function startMove (evt, moveType) {
    x1 = evt.clientX;
    y1 = evt.clientY;
    document.documentElement.setAttribute("onmousemove","moveIt(evt)")
    
    if (moveType == 'single') {
        C = evt.target;
    }
    else {
        C = evt.target.parentNode;
    }
}

function moveIt(evt) {
    translation = C.getAttributeNS(null, "transform").slice(10,-1).split(' ');
    sx = parseInt(translation[0]);
    sy = parseInt(translation[1]);
    
    C.setAttributeNS(null, "transform", "translate(" + (sx + evt.clientX - x1) + " " + (sy + evt.clientY - y1) + ")");
    x1 = evt.clientX;
    y1 = evt.clientY;
}

function endMove() {
    document.documentElement.setAttributeNS(null, "onmousemove", null)
}