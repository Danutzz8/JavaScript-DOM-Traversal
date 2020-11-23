// const grandparent = document.getElementById('grandparent-id')
// const grandparent = document.querySelector('#grandparent-id')
// const parents = Array.from(document.getElementsByClassName('parent'))
// const parents = document.querySelectorAll('.parent')

// const parents = Array.from(grandparent.children)
// const parentOne = parents[0]
// const children = parentOne.children

// const childrenOne = document.querySelector('.child')
const children = document.querySelectorAll('.child')

// Selecting Up 

const childOne = document.querySelector('#child-one')
const parent = childOne.parentElement
const grandparent = childOne.closest('.grandparent')

// parents.forEach(changeColor)
// changeColor(childrenOne)
// children.forEach(changeColor)
changeColor(grandparent)

function changeColor(element) {
    element.style.backgroundColor = '#777'
}