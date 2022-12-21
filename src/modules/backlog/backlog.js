import { TASKS } from '../../constants/api/api_urls_scheduler'

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
      todo.classList.add('backlog_todo')
      todo.innerText = el.subject
      wrapperBacklog.append(todo)
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
            todoUser.style.height = `${(widthTodos / 8) * el.executionTime}px`
            todoUser.classList.add('user_todo')
            todoUser.innerText = el.subject

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
