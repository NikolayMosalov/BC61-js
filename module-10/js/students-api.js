const BASE_URL = "https://64c770650a25021fde927baf.mockapi.io/";
const END_POINT = "bc61-students";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
};

const student = {
  firstName: "Sister",
  lastName: "Miller",
  country: "Ukraine",
  age: 35,
  city: "Lviv",
};

// метод GET
export function getStudents() {
  return fetch(`${BASE_URL}${END_POINT}`, options).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

getStudents().then(console.log);

export function getStudentById(id) {
  return fetch(`${BASE_URL}${END_POINT}/${id}`, options).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
getStudentById(1).then(console.log);

// метод POST

export function addStudentById(student) {
  return fetch(`${BASE_URL}${END_POINT}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(student),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

// addStudentById(student).then(console.log);

// МЕТОД PUT

export function updateStudent(id, data) {
  return fetch(`${BASE_URL}${END_POINT}/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

// updateStudent(7, { age: 18 }).then(console.log);

// МЕТОД DELETE

export function deleteStudent(id) {
  return fetch(`${BASE_URL}${END_POINT}/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

// deleteStudent(1).then(console.log);
