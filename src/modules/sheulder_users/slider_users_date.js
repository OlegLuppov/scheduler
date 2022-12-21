const schedulerApp = document.querySelector('.scheduler_app')

const changeDate = (e) => {
  const width = document.querySelector('.date').offsetWidth
  const dateWrapper = document.querySelector('.scheduler_date')
  const schedulerTodos = document.querySelectorAll('.todos_user')

  if (e.target.closest('.scheduler_button-left')) {
    dateWrapper.style.marginLeft = `${-width * 7}px`
    schedulerTodos.forEach((el) => {
      el.style.marginLeft = `${-width * 7}px`
    })
  }
  if (e.target.closest('.scheduler_button-right')) {
    dateWrapper.style.marginLeft = ''
    schedulerTodos.forEach((el) => {
      el.style.marginLeft = ''
    })
  }
}

schedulerApp.addEventListener('click', (e) => {
  changeDate(e)
})
