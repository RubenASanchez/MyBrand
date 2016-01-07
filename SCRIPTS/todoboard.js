function dragTask(task,event) {
    event.dataTransfer.setData('task',task.id);
}

function dropTask(target,event) {
    var task = event.dataTransfer.getData('task');
    target.appendChild(document.getElementById(task));
}


/* Turns out I did not need this, used CSS haha, but I am keeping it just in case I want some further functionality */
/*window.onload = init;

function init() {
    document.getElementById('a').onclick = addNewClass;
    document.getElementById('b').onclick = addNewClass;
    document.getElementById('c').onclick = addNewClass;
    document.getElementById('d').onclick = addNewClass;
}

function addNewClass() {
    var classString = this.className;
    var newClass = classString.concat(" movedCompleted");
    this.className = newClass;
}
*/