class DrapAndDrop {
  allowDrop = (event) => {
    event.preventDefault()
  }

  drag = (event, options) => {
    const dropElem = event.target
    if (event.target.className === options.class) {
      dropElem.classList.add('selected')
    }
    if (options.classPopup) {
      const todoPopup = document.createElement('div')
      todoPopup.classList.add(options.classPopup)
      todoPopup.innerText = options.textPopup
      dropElem.append(todoPopup)
    }
  }

  drop = (event, options) => {
    const dropElem = document.querySelector('.selected')
    if (event.target.className === options.parent) {
      event.target.append(dropElem)
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      dropElem.classList.add(options.class)
      dropElem.classList.remove(options.classRemove)
    }
    if (event.target.className === options.children) {
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      event.target.parentNode.append(document.querySelector('.selected'))
      dropElem.classList.add(options.class)
      dropElem.classList.remove(options.classRemove)
    }

    if (event.target.className !== options.children && event.target.className !== options.parent) {
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      event.target.parentNode.parentNode.append(document.querySelector('.selected'))
      dropElem.classList.add(options.class)
      dropElem.classList.remove(options.classRemove)
    }
    dropElem.classList.remove('selected')
  }
}

export const allowDropElem = new DrapAndDrop().allowDrop
export const dragElem = new DrapAndDrop().drag
export const dropElem = new DrapAndDrop().drop
