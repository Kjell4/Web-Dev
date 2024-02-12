let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    let all = document.getElementById('tasks')
    let container = document.createElement('div')
    container.classList.add('container')
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    let text = document.getElementById('intask').value
    let tasktext = document.createElement('div')
    tasktext.innerHTML = text
    tasktext.style.position = 'absolute'
    tasktext.style.marginLeft = '50px'
    tasktext.style.width = '650px';
    let del = document.createElement('img')
    del.src = "static/images/delete.png"
   
    all.appendChild(container)
    container.appendChild(tasktext)
    container.appendChild(del)
    container.appendChild(checkbox)

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            tasktext.style.textDecoration = 'line-through';
        } else {
            tasktext.style.textDecoration = 'none';
        }
    });

    del.addEventListener('click', function() {
        container.remove()
    })
});
