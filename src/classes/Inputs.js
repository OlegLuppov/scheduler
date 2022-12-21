class Inputs {
  filter = (e, list) => {
    const arrElem = document.querySelectorAll(list)

    if (e.target.value !== '') {
      let value = e.target.value.trim()
      let newValue = value[0].toUpperCase() + value.slice(1)

      arrElem.forEach((el) => {
        if (el.innerText.search(newValue) === -1) {
          el.classList.add('hide')
          el.innerHTML = el.innerText
        } else {
          el.classList.remove('hide')
          let str = el.innerText
          el.innerHTML = this.insertTrim(str, el.innerText.search(newValue), newValue.length)
        }
      })
    } else {
      arrElem.forEach((el) => {
        el.classList.remove('hide')
        el.innerHTML = el.innerText
      })
    }
  }

  insertTrim = (str, pos, len) => `${str.slice(0, pos)}<mark>${str.slice(pos, pos + len)}</mark>${str.slice(pos + len)}`
}

const listFilter = new Inputs().filter
export default listFilter
