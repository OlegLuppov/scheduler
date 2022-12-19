import { renderDate } from '../../classes/class_showElem'

document.addEventListener('DOMContentLoaded', () => {
  const dateList = [
    '01.12',
    '02.12',
    '03.12',
    '04.12',
    '05.12',
    '06.12',
    '07.12',
    '08.12',
    '09.12',
    '10.12',
    '11.12',
    '12.12',
    '13.12',
    '14.12',
  ]
  const dateWrapper = document.querySelector('.scheduler_date')
  const optionsDate = {
    arr: dateList,
    parentElem: dateWrapper,
    elmemDom: 'span',
    classElemDom: 'date',
  }

  renderDate(optionsDate)
})
