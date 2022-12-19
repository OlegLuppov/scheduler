class ShowElem {
  // метод отрисовки пользователей и разметка дел на против каждого пользователя
  renderElemUsers = async (options) => {
    const res = await fetch(options.API)
    const data = await res.json()
    const arr = await [...data]

    const dateList = document.querySelectorAll('.date')

    arr.forEach((user) => {
      const elemTodos = document.createElement(options.elemDomTodo)
      elemTodos.classList.add(options.classTodos)

      dateList.forEach(() => {
        const elem = document.createElement('div')
        elem.classList.add(options.classTodo)
        elemTodos.append(elem)
        elem.innerText = 'hello'
      })

      const elemUser = document.createElement(options.elemDomUser)
      elemUser.innerText = user.name
      options.elemParentUsers.append(elemUser)
      elemUser.classList.add(options.classUser)
      options.elemParentTodos.append(elemTodos)
    })
  }

  // метод отрисовки даты
  renderElemDate = (options) => {
    options.arr.forEach((date) => {
      const thisDate = document.createElement(options.elmemDom)
      thisDate.classList.add(options.classElemDom)
      thisDate.innerText = date
      options.parentElem.append(thisDate)
    })
  }
}

export const renderUsers = new ShowElem().renderElemUsers
export const renderDate = new ShowElem().renderElemDate
