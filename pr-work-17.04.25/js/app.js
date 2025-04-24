// const url = "https://jsonplaceholder.typicode.com/users"


// function createCard(userData) {
//     const userCard = document.createElement('div')
//     const userCardName = document.createElement('div')
//     const userCardPhone = document.createElement('div')
//     const userCardEmail = document.createElement('div')
//     const userCardAdress = document.createElement('div')
//     userCard.className = 'userCard'
//     userName = userData.name
//     userPhone = userData.phone
//     userEmail = userData.email
//     userAdress = userData.address.street
//     userCardName.append(userName)
//     userCardPhone.append(userPhone)
//     userCardEmail.append(userEmail)
//     userCardAdress.append(userAdress)
//     userCard.append(userCardName)
//     userCard.append(userCardPhone)
//     userCard.append(userCardEmail)
//     userCard.append(userCardAdress)
//     document.body.append(userCard)
// }

// fetch(url)
//     .then((response) => {
//         console.log(response)
//         if (response.ok) {
//             return response.json()
//         } else {
//             console.error('Ошибка')
//         }
//     })
//     .then((data) => {
//         console.log(data)
//         data.forEach(el => {
//             createCard(el)
//         });
//     })

// T.2


// 2)	Создайте функцию для получения данных с API - ' https://jsonplaceholder.typicode.com/todos', c использованием async await и выведите список дел на странице. Если свойство completed = false, то выведите «Задача не выполнена», красным цветом, если completed = true – «Задача выполнена», зеленым цветом



// const url = "https://jsonplaceholder.typicode.com/todos"

// function createCardTodo(todoData) {
//     const todoCard = document.createElement('div')
//     const todoCardTitle = document.createElement('div')
//     const todoCardComplited = document.createElement('div')
//     todoCard.className = 'todoCard'
//     complited = todoData.completed
//     if (complited) {
//         todoCardComplited.innerHTML = `Задача выполнена`
//         todoCardComplited.classList.add(`C-True`)
//     } else {
//         todoCardComplited.innerHTML = `Задача не выполнена`
//         todoCardComplited.classList.add(`C-False`)
//     }
//     todoTitle = `${todoData.id}) ${todoData.title}`
//     todoCardTitle.append(todoTitle)
//     todoCard.append(todoCardTitle)
//     todoCard.append(todoCardComplited)
//     document.body.append(todoCard)
// }

// fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             console.log('Error')
//         }
//     })
//     .then((data) => {
//         console.log(data)
//         data.forEach(element => {
//             console.log(element)
//             createCardTodo(element)
//         });
//     })

// T.3

const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const nameAdd = document.getElementById('nameAdd');
const nameReset = document.getElementById('nameReset');

title.textContent = 'Здравствуйте!'

function showUserName() {
    nameAdd.addEventListener('click', function () {
        inputName = nameInput.value
        localStorage.setItem('name', inputName)
        const date = new Date()
        if (date.getHours() < 12) {
            title.textContent = `Добрый утро, ${inputName}!`
        } else if (date.getHours() > 12) {
            console.log('12')
            title.textContent = `Добрый День, ${inputName}!`
        } else if (date.getHours() > 19) {
            console.log('12')
            title.textContent = `Добрый Вечер, ${inputName}!`
        }
        localStorage.setItem('title', title.textContent)
    })
    nameReset.addEventListener('click', () => {
        title.textContent = 'Здравствуйте!'
        localStorage.setItem('title', title.textContent)

    })
}

window.addEventListener('load', () => {
    title.textContent = localStorage.getItem('title')
})

showUserName()