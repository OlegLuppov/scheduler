import { allowDropElem, dropElem } from '../../classes/Drap_and_Drop'
import { USERS } from '../../constants/api/api_urls_scheduler'

const renderUsers = async () => {
  const usersWrapper = document.querySelector('.scheduler_users')
  const todosWrapper = document.querySelector('.scheduler_todos')

  const res = await fetch(USERS)
  const data = await res.json()
  const arrUsers = await [...data]

  const dateList = document.querySelectorAll('.date')

  arrUsers.forEach((user) => {
    const elemTodos = document.createElement('div')
    elemTodos.classList.add('todos_user')

    dateList.forEach(() => {
      const elem = document.createElement('ul')
      elem.classList.add('todos')
      elem.id = 'todos'
      elemTodos.append(elem)

      elem.ondragover = allowDropElem
      elem.addEventListener('drop', (e) => {
        dropElem(e, { class: 'user_todo', classRemove: 'backlog_todo', height: elem.offsetHeight, field: 'todos' })
      })
    })

    const elemUser = document.createElement('span')
    elemUser.innerText = user.name
    usersWrapper.append(elemUser)
    elemUser.classList.add('user')
    todosWrapper.append(elemTodos)
  })
}

document.addEventListener('DOMContentLoaded', renderUsers)
