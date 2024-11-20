let search = document.getElementsByClassName('search')[0]
let navigate = document.getElementsByClassName('navigate')[0]

let adress = ''

search.addEventListener('click', () => {
    adress = prompt('Впишите адрес')
})

navigate.addEventListener('click', () => {
    location.href = adress
})