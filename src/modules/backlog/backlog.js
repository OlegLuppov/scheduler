import { dragElem } from '../../classes/Drag_and_Drop'
import listFilter from '../../classes/Inputs'
import { TASKS } from '../../constants/api/api_urls_scheduler'

const backlogInput = document.querySelector('.backlog__input')

const renderTodos = async () => {
  const res = await fetch(TASKS)
  const data = await res.json()
  const arr = await [...data]

  const wrapperBacklog = document.querySelector('.backlog__list')
  const wrapperUser = document.querySelectorAll('.scheduler__row')
  const wrapperDate = document.querySelectorAll('.date-item__current')
  const widthTodos = document.querySelector('.scheduler__list').offsetHeight

  arr.forEach((el) => {
    if (el.executor === null) {
      const todo = document.createElement('li')
      const todoContent = document.createElement('span')
      todo.append(todoContent)
      todo.draggable = true
      todo.classList.add('backlog__todo')
      todo.dataset.time = el.executionTime
      todoContent.innerText = el.subject
      wrapperBacklog.append(todo)
      todo.addEventListener('dragstart', (e) => {
        const dragOptions = {
          textPopup: `Выполнить за: ${el.executionTime}ч`,
          class: 'backlog__todo',
          classPopup: 'scheduler__popup',
        }
        dragElem(e, dragOptions)
      })
    } else {
      const dataDate = el.planStartDate
        .split('-')
        .reverse()
        .filter((date) => date.length < 3)
        .join('.')

      for (let i = 0; i < wrapperUser.length; i++) {
        for (let j = 0; j < wrapperDate.length; j++) {
          const date = wrapperDate[j].innerText

          if (el.executor === i + 1 && dataDate === date) {
            const wrapperTodos = wrapperUser[i].children
            const todoUser = document.createElement('li')
            const todoContent = document.createElement('span')
            const todoPopup = document.createElement('div')
            todoUser.append(todoContent)
            todoUser.append(todoPopup)
            todoUser.draggable = true
            todoPopup.classList.add('scheduler__popup')
            todoPopup.innerText = `Выполнить за: ${el.executionTime}ч`
            todoUser.style.height = `${(widthTodos / 8) * el.executionTime}px`
            todoUser.classList.add('scheduler__todo')
            todoContent.innerText = el.subject

            for (let k = 0; k < wrapperTodos.length; k++) {
              wrapperTodos[j].append(todoUser)
            }
          }
        }
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', renderTodos)
backlogInput.addEventListener('input', (e) => {
  const todos = '.backlog__todo'
  listFilter(e, todos)
})
