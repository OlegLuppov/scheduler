class DrapAndDrop {
  allowDrop = (event) => {
    event.preventDefault()
  }

  drag = (event, options) => {
    event.dataTransfer.setData('id', event.target.id)
    let idItem = event.dataTransfer.getData('id')
    const dropElem = document.querySelector(`#${idItem}`)
    if (event.target.className === options.class) {
      const todoPopup = document.createElement('div')
      todoPopup.classList.add('todo_popup')
      todoPopup.innerText = options.textPopup
      dropElem.append(todoPopup)
      console.log(event.target.className)
    }
  }

  drop = (event, options) => {
    let idItem = event.dataTransfer.getData('id')
    const dropElem = document.querySelector(`#${idItem}`)
    dropElem.classList.add(options.class)
    dropElem.classList.remove(options.classRemove)

    if (event.target.className === options.parent) {
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      event.target.append(document.querySelector(`#${idItem}`))
    }
    if (event.target.className === options.children) {
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      event.target.parentNode.append(document.querySelector(`#${idItem}`))
    }

    if (event.target.className !== options.children && event.target.className !== options.parent) {
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      event.target.parentNode.parentNode.append(document.querySelector(`#${idItem}`))
    }
  }
}

export const allowDropElem = new DrapAndDrop().allowDrop
export const dragElem = new DrapAndDrop().drag
export const dropElem = new DrapAndDrop('.user_todo').drop
