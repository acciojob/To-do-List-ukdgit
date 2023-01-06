const input = document.getElementById('newTodoInput')
const button = document.getElementById('addTodoBtn')
const ol = document.getElementById('todoList')

const onClick = () => {
    const todo = input.value
    if (!todo) return;

    const li = document.createElement('li')
    li.innerText = todo
    ol.appendChild(li)
    input.value = ''
}

button.addEventListener('click', onClick)