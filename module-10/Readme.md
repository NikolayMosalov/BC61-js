# Модуль 10. Заняття 19. HTTP requests

BASE_URL: https://64c770650a25021fde927baf.mockapi.io/

Отримати список всіх студентів :

- ендпоінт : bc61-students
- метод : GET

Отримати інформацію про конкретного студента :

- ендпоінт : /bc61-students/:{id}
- метод : GET

Додати нового студента :

- ендпоінт : /bc61-students
- метод : POST

Змінити дані конкретного студента :

- ендпоінт : /bc61-students/:{id}
- метод : PUT

Видалити конкретного студента :

- ендпоінт : /bc61-students/:{id}
- метод : delete

### Завдання

- Створи папку js і в ній додай файл "students-api.js".
- Додай до цього файлу функції з методами, які вказані далі
- Створи додатковий файл "app.js" і зроби у нього іменований імпорт функцій запиту, та потисту їх

## 1.Get

Зробити запит для отримання списку студентів групи BC61

## 2.Get

Зробити запит для отримання інформації про студента групи BC61 за його id

## 3.Post

Зробити запит для створення нового студента групи BC61

## 4.Put

Зробити запит для зміни інформації студента групи BC61 за його id

## 5.Delete

Зробити запит для видалення студента групи BC61 за його id

### Обьект студента

```js
const student = {
  firstName: 'Sister',
  lastName: 'Miller',
  country: 'Ukraine',
  age: 35,
  city: 'Lviv',
};
```

### обьект для оновлення даних

```js
const updateData = { firstName: 'Lory' };
```


# Модуль 10. Заняття 20. HTTP requests

- Оформити інтерфейс

- html - modal
```
  `
    <div class="modal">
    <form class="student-form">
      <input name="firstName" placeholder="firstName*" type="text" required />
      <input name="lastName" placeholder="lastName*" type="text" required />
      <input name="age" placeholder="Age*" type="text" required />
      <input name="country" placeholder="Country*" type="text" required />
      <input name="city" placeholder="City*" type="text" required />

      <button class="add-student-btn">Add Student</button>
    </form>
    </div>
`
```

- обьект студента
```
js
const student = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    age: age.value,
    city: city.value,
  };
```

- createStudentCard()
```
function createStudentCard(student) {

  return `
  <li class="photo-card">
        <img
          src=""
          alt="${firstName}"
        />
        <button data-id=${id} type="button" class="delete-btn js-delete-btn">&#9988;</button>

        <div class="wrapper">
          <div class="info" >
          <b class="student-info">${firstName}</b>
          <b class="student-info">${lastName}</b>
          <b class="student-info">${age}</b>
          </div>

          <div class="info">
          <b class="student-info">${country}</b>
          <b class="student-info">${city}</b>
          </div>
        </div>
      </li>
  `;
}
```