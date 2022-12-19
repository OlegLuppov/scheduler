import { renderUsers } from '../../classes/class_showElem'
import { USERS } from '../../constants/api/api_urls_scheduler'

document.addEventListener('DOMContentLoaded', () => {
  const usersWrapper = document.querySelector('.scheduler_users')
  const todosWrapper = document.querySelector('.scheduler_todos')

  const optionsUsers = {
    elemParentUsers: usersWrapper,
    elemParentTodos: todosWrapper,
    API: USERS,
    elemDomUser: 'span',
    classUser: 'user',
    elemDomTodo: 'div',
    classTodos: 'todos_user',
    classTodo: 'todo',
  }
  renderUsers(optionsUsers)
})
