class DrapAndDrop {
  allowDrop = (event) => {
    event.preventDefault()
  }

  drag = (event) => {
    event.dataTransfer.setData('id', event.target.id)
  }

  drop = (event, options) => {
    if (event.target.id === options.field) {
      let idItem = event.dataTransfer.getData('id')
      const dropElem = document.querySelector(`#${idItem}`)
      dropElem.classList.add(options.class)
      dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
      event.target.append(document.querySelector(`#${idItem}`))
    }
  }
}

export const allowDropElem = new DrapAndDrop().allowDrop
export const dragElem = new DrapAndDrop().drag
export const dropElem = new DrapAndDrop('.user_todo').drop
