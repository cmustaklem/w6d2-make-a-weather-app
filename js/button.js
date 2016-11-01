var counter = 0
//add button JS
var button = document.createElement('button')
button.innerHTML = 'Click me'
button.classList.add('btn', 'btn-default', 'btn-block')

var ul = document.createElement('ul')
ul.classList.add('list-group')

//create function to set-up the button's functionality

button.addEventListener('click', function() {
    counter++

    var li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerHTML = counter
    ul.appendChild(li)

})

document.getElementById('dom').appendChild(button)
document.getElementById('dom').appendChild(ul)
