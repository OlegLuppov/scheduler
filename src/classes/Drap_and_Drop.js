class DrapAndDrop {
  allowDrop = (event) => {
    event.preventDefault()
  }

  drag = (event) => {
    event.dataTransfer.setData('id', event.target.id)
    const dragElem = document.querySelector(`#${event.dataTransfer.getData('id')}`)
    dragElem.style.backgroundColor = 'yellow'
  }

  drop = (event, options) => {
    let idItem = event.dataTransfer.getData('id')
    const dropElem = document.querySelector(`#${idItem}`)
    dropElem.classList.add(options.class)
    dropElem.style.height = `${(options.height / 8) * dropElem.dataset.time}px`
    dropElem.style.backgroundColor = 'yellowgreen'
    event.target.append(document.querySelector(`#${idItem}`))
  }
}

export const allowDropElem = new DrapAndDrop().allowDrop
export const dragElem = new DrapAndDrop().drag
export const dropElem = new DrapAndDrop('.user_todo').drop
