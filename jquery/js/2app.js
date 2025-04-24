// $('.text').html('<span style="color: red">jquery</span>')
// // 2
// $('.box').first().addClass('black')
// $('.box').eq(1).addClass('red')

// console.log($('.box').eq(1))

// $('#link').attr('href', 'https://example.com')
// $('#link').removeAttr('href', 'https://example.com')

// TODO 3

// const todoCount = $('.todo-and-count')

// todoCountNumber = 1

// $('.todo-add').click(function () {
//     todoCount.html(`Todo: ${todoCountNumber++}`)
//     const todoData = $('.todo-input').val()
//     console.log(todoData)
//     if (todoData) {
//         const todoItem = document.createElement('li')
//         todoItem.textContent = todoData
//         $('.todo-list').prepend(todoItem)

//     }
// })

// $('.todo-remove').click(function () {
//     $('.todo-list').empty()
//     todoCount.html(`Todo: `)
// })


// 3

// $('#btn-animate').click(function (el) {
//     $('.text-animate').animate({
//         opacity: "toggle",
//         heigth: "toggle",
//     }, 500)
//     if ($(this().text() === 'Press me')) {
//         $(this).html('Press me 1')
//     } else {
//         $(this).html('Press me 2')
//     }
// })

// 4

$('.send').click(function (event) {
    event.PreventDefault()
    let flag = true
    if (!$('.name').val()) {
        $('#error').show()
        console.log('none')
    } else {
        $('#sended').show()
    }
})