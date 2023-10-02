import { getStudents, addStudentById, deleteStudent } from "./students-api.js";

const openModalBtnEl = document.querySelector(".js-modal-btn");
const listEl = document.querySelector(".gallery");

openModalBtnEl.addEventListener("click", onModalBtnClick);

let items = [];
const options = {
  onShow: () => {
    document.body.style.overflow = "hidden";
  },
  onClose: () => {
    document.body.style.overflow = "visible";
  },
};

const modal = basicLightbox.create(
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
`,
  options
);

function onModalBtnClick() {
  modal.show();

  document.querySelector(".student-form").addEventListener("submit", onSubmit);
}

function onSubmit(e) {
  e.preventDefault();

  const { firstName, lastName, age, country, city } = e.currentTarget.elements;

  const student = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    age: age.value,
    city: city.value,
  };

  addStudentById(student)
  .then((res) => {
    items.push(student);
    return createStudentCard(res)
  })
  .then((res)=>{
    listEl.insertAdjacentHTML('beforeend', res)

  })
  .catch(console.log);

  e.currentTarget.reset();
  modal.close();

  setTimeout(() => {
    alert("Student is added!");
  }, 1000);
}

function createStudentCard(student) {
  const { firstName, id, lastName, age, country, city, avatar } = student;

  return `
    <li class="photo-card">
          <img
            src="${avatar}"
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
