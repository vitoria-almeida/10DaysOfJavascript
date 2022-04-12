var task = document.getElementById('input_task')
      
function insert_task() {
    if (task.value === '') {
        alert('You must write something')
    } else {
        var new_task = document.getElementsByTagName('li').innerHTML = task.value

        // clear
        document.getElementById('input_task').value = ''

        // new li
        var createLi = document.createElement('li')
        var x = document.createTextNode(new_task)
        createLi.appendChild(x)
        document.getElementById("list").appendChild(createLi)
    }
}