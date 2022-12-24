# scheduler

[Link task](https://docs.google.com/document/d/1jb2VsBn2iOEI99S4cfK3Kll4NGmADy74q5rY_JOn4Vo/edit#)

## STACK

Front-end:

- [JavaScript](https://learn.javascript.ru/)
- [HTML](https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS](https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Webpack](https://webpack.js.org/)

## QUICK START

1. Clone this repository.
2. [`npm install`](https://docs.npmjs.com/cli/install)
3. Build app `npm run build` in command line
4. Run app `npm run start` in command line
5. Json-server port 8081 (will open on its own) to test the API
6. port 8080 (will open on its own)

## P.S.

Так как предоставленный API не всегда работал в качестве тестового API установил json-server и в нем создал данные users и tasks.

Немного о приложении:

- таблицу с пользователями и делами можно скролить по вертикали, при этом дата остается на месте
- backlog можно скролить по вертикали, так же там реализован поиск с потсветкой введенных символов, что достаточно удобно
- дела из backlog можно перетаскивать на любого пользователя и дату
- дела в таблице можно перетаскивать от пользователя к пользователю
- дата реализована с расчетом на две недели,но видна только одна неделя, поэтому ее можно листать влево и вправо нажав на кнопки "left" и "right".
- при наведении на задачу напротив пользователя появляется popup с временем отведенным на выполнение задачи

## SCREENSHOT APP

![Screenshot_1](https://github.com/OlegLuppov/scheduler/blob/master/src/assets/image/screenshots/screenshot.png)
