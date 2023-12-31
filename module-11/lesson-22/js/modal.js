const options = {
  onShow: () => {
    document.body.style.overflow = "hidden";
  },
  onClose: () => {
    document.body.style.overflow = "visible";
  },
};

export const modal = basicLightbox.create(
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
