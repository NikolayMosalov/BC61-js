import { getStudents, addStudentById, deleteStudent } from "./students-api.js";
import refs from "./refs.js";
import { randerMarkup } from "./rander-markup.js";
import { modal } from "./modal.js";
import { createStudentCard } from "./create-student-card.js";

const { openModalBtnEl, listEl, loaderEL, paragraphEl } = refs;

document.addEventListener("DOMContentLoaded", onRanderPage);

openModalBtnEl.addEventListener("click", onModalBtnClick);
listEl.addEventListener("click", onDeleteStudent);

export let items = [];

function onModalBtnClick() {
  modal.show();

  document.querySelector(".student-form").addEventListener("submit", onSubmit);
}

async function onSubmit(e) {
  e.preventDefault();

  const { firstName, lastName, age, country, city } = e.currentTarget.elements;

  loaderEL.classList.remove("is-hidden");
  paragraphEl.classList.add("is-hidden");
  listEl.classList.add("is-hidden");

  const student = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    age: age.value,
    city: city.value,
  };

  try {
    const res = await addStudentById(student);
    items.push(res);
    listEl.insertAdjacentHTML("beforeend", createStudentCard(res));
    listEl.classList.remove("is-hidden");
  } catch (error) {
    console.log(error);
  } finally {
    loaderEL.classList.add("is-hidden");
  }

  //   addStudentById(student)
  //     .then((res) => {
  //       items.push(res);
  //       return createStudentCard(res);
  //     })
  //     .then((res) => {
  //       listEl.insertAdjacentHTML("beforeend", res);

  //       listEl.classList.remove("is-hidden");
  //     })
  //     .catch(console.log)
  //     .finally(() => {
  //       loaderEL.classList.add("is-hidden");
  //     });

  e.target.reset();
  modal.close();

  setTimeout(() => {
    alert("Student is added!");
  }, 1000);
}

async function onRanderPage() {
  loaderEL.classList.remove("is-hidden");

  try {
    const res = await getStudents();
    items = [...res];
    randerMarkup(res);
  } catch (error) {
    console.log(error);
  } finally {
    loaderEL.classList.add("is-hidden");
  }

  //   getStudents()
  //     .then((res) => {
  //       items = [...res];
  //       randerMarkup(res);
  //     })
  //     .catch(console.log)
  //     .finally(() => {
  //       loaderEL.classList.add("is-hidden");
  //     });
}

async function onDeleteStudent(event) {
  if (event.target.nodeName !== "BUTTON") return;
  loaderEL.classList.remove("is-hidden");
  listEl.classList.add("is-hidden");
  const index = event.target.dataset.id;

  items = items.filter(({ id }) => id !== index);

  try {
    await deleteStudent(index);
    randerMarkup(items);
    listEl.classList.remove("is-hidden");
  } catch (error) {
    console.log(error);
  } finally {
    loaderEL.classList.add("is-hidden");
  }

  //   deleteStudent(index)
  //     .then(() => {
  //       randerMarkup(items);
  //       listEl.classList.remove("is-hidden");
  //     })
  //     .catch(console.log)
  //     .finally(() => {
  //       loaderEL.classList.add("is-hidden");
  //     });
}
