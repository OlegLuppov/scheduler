import { allowDropElem, dragElem, dropElem } from '../../classes/Drag_and_Drop'
import { USERS } from '../../constants/api/api_urls_scheduler'

const renderUsers = async () => {
  const usersWrapper = document.querySelector('.executor-item')
  const todosWrapper = document.querySelector('.scheduler__todos')

  const res = await fetch(USERS)
  const data = await res.json()
  const arrUsers = await [...data]

  const dateList = document.querySelectorAll('.date-item__current')

  arrUsers.forEach((user) => {
    const elemTodos = document.createElement('div')
    elemTodos.classList.add('scheduler__row')

    dateList.forEach(() => {
      const elem = document.createElement('ul')
      elem.classList.add('scheduler__list')
      elemTodos.append(elem)

      elem.ondragover = allowDropElem
      elem.addEventListener('drop', (e) => {
        const dropOptions = {
          class: 'scheduler__todo',
          classRemove: 'backlog__todo',
          height: elem.offsetHeight,
          parent: 'scheduler__list',
          children: 'scheduler__todo',
        }
        dropElem(e, dropOptions)
      })
      elem.addEventListener('drag', (e) => {
        const dragOptions = { class: 'scheduler__todo' }
        dragElem(e, dragOptions)
      })
    })

    const elemUser = document.createElement('span')
    elemUser.innerText = user.name
    usersWrapper.append(elemUser)
    elemUser.classList.add('executor-item__current')
    todosWrapper.append(elemTodos)
  })
}

document.addEventListener('DOMContentLoaded', renderUsers)
