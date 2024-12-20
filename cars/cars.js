//ADD

const closeBtn = document.querySelector('#close-add-popup');
const addCarPopup = document.querySelector('#add-car-popup');
const addCarBtn = document.querySelector('#add-car-btn');
const addForm = document.querySelector('#add-car-form');

closeBtn.addEventListener('click', () => {
  addCarPopup.classList.toggle('flex');
  addCarPopup.classList.toggle('hidden');

});
addCarBtn.addEventListener('click', () => {
  addCarPopup.classList.toggle('flex');
  addCarPopup.classList.toggle('hidden');

});

addForm.addEventListener('submit', (event) => {
  const yearInput = document.querySelector('#year');
  const currentYear = new Date().getFullYear();
  const year = parseInt(yearInput.value);

  if (year < 1995 || year > currentYear) {
    event.preventDefault();
    alert(`Please enter a valid year between 1995 and ${currentYear}.`);
  }
});

//Edit

const closeEditBtn = document.querySelector('#close-edit-car-popup');
const editCarPopup = document.querySelector('#edit-car-popup');
const editCarBtns = document.querySelectorAll('.edit-car-btn');
const submitEditBtn = document.querySelector('#submit-edit-car');
const editForm = document.querySelector('#edit-car-form');
const inputs = editForm.querySelectorAll('input');

editCarBtns.forEach(editBtn => {
  editBtn.addEventListener('click', () => {

    const { cbrand, cmodel, cyear } = editBtn.dataset;
    editCarPopup.classList.toggle('hidden');
    editCarPopup.classList.toggle('flex');

    // submitEditBtn.name = editBtn.name;
    // submitEditBtn.value = editBtn.value;

    inputs.forEach(input => {

      if (input.name === 'registration_number') input.value = editBtn.value;
      if (input.name === 'brand') input.value = cbrand;
      if (input.name === 'model') input.value = cmodel;
      if (input.name === 'year') input.value = cyear;
    });

  })
});

closeEditBtn.addEventListener('click', () => {
  editCarPopup.classList.toggle('flex');
  editCarPopup.classList.toggle('hidden');

});

editForm.addEventListener('submit', function (event) {
  const yearInput = document.querySelector('#edit-year');
  const currentYear = new Date().getFullYear();
  const year = parseInt(yearInput.value);

  if (year < 1995 || year > currentYear) {
    event.preventDefault();
    alert(`Please enter a valid year between 1995 and ${currentYear}.`);
  }
});

//Delete

const deleteForms = document.querySelectorAll('.deleteForm');
deleteForms.forEach(form => {
  form.addEventListener('submit', (event) => {

    const confirmDelete = confirm('Are you sure you want to delete this car?');

    if (!confirmDelete) {
      event.preventDefault();
    }
  });
});