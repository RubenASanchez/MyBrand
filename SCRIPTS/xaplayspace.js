function dragTask(task,event) {
    event.dataTransfer.setData('task',task.id);
}

function dropTask(target,event) {
    var task = event.dataTransfer.getData('task');
    
    target.appendChild(document.getElementById(task));
}