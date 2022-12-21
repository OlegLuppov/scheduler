const dateList = ['01.12', '02.12', '03.12', '04.12', '05.12', '06.12', '07.12', '08.12', '09.12', '10.12', '11.12', '12.12', '13.12', '14.12']

const renderDate = () => {
  dateList.forEach((date) => {
    const dateWrapper = document.querySelector('.scheduler_date')

    const elemDate = document.createElement('span')
    elemDate.classList.add('date')
    elemDate.innerText = date
    dateWrapper.append(elemDate)
  })
}

document.addEventListener('DOMContentLoaded', renderDate)
