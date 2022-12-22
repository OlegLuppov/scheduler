import { dragElem } from '../../classes/Drap_and_Drop'
import listFilter from '../../classes/Inputs'
import { TASKS } from '../../constants/api/api_urls_scheduler'

const backlogInput = document.querySelector('.scheduler_backlog-search')

const renderTodos = async () => {
  const res = await fetch(TASKS)
  const data = await res.json()
  const arr = await [...data]

  const wrapperBacklog = document.querySelector('.scheduler_backlog-list')
  const wrapperUser = document.querySelectorAll('.todos_user')
  const wrapperDate = document.querySelectorAll('.date')
  const widthTodos = document.querySelector('.todos').offsetHeight

  arr.forEach((el) => {
    if (el.executor === null) {
      const todo = document.createElement('li')
      const todoContent = document.createElement('span')
      todo.append(todoContent)
      todo.draggable = true
      todo.id = `todo_${el.id}`
      todo.dataset.time = el.executionTime
      todoContent.innerText = el.subject
      wrapperBacklog.append(todo)
      todo.ondragstart = dragElem
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
            todoPopup.classList.add('todo_popup')
            todoPopup.innerText = `Выполнить за: ${el.executionTime}ч`
            todoUser.draggable = true
            todoUser.style.height = `${(widthTodos / 8) * el.executionTime}px`
            todoUser.classList.add('user_todo')
            todoUser.id = `todo_${el.id}`
            todoContent.innerText = el.subject
            todoUser.ondragstart = dragElem

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
  const todos = '.backlog_todo'
  listFilter(e, todos)
})
