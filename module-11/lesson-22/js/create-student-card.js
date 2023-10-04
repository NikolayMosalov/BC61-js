export function createStudentCard(student) {
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
