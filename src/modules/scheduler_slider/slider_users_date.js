const schedulerApp = document.querySelector('.scheduler')

const changeDate = (e) => {
  const width = document.querySelector('.date-item__current').offsetWidth
  const dateWrapper = document.querySelector('.date-item__wrapper')
  const schedulerTodos = document.querySelectorAll('.todos_user')

  if (e.target.closest('.buttons-item__button-left')) {
    dateWrapper.style.marginLeft = `${-width * 7}px`
    schedulerTodos.forEach((el) => {
      el.style.marginLeft = `${-width * 7}px`
    })
  }
  if (e.target.closest('.buttons-item__button-right')) {
    dateWrapper.style.marginLeft = ''
    schedulerTodos.forEach((el) => {
      el.style.marginLeft = ''
    })
  }
}

schedulerApp.addEventListener('click', (e) => {
  changeDate(e)
})
