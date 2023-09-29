const BASE_URL = "https://64c770650a25021fde927baf.mockapi.io/";
const END_POINT = "bc61-students";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
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
getStudentById(7).then(console.log);
