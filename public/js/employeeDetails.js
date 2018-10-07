const links = document.querySelectorAll('.tablink');
const singleBody = document.querySelectorAll('.singleBody');

const sendData = (form) => {
  const formData = new FormData(form);
  const holdData = {};
  formData.forEach((value, key) => {
    holdData[key] = value;
  });
  fetch('/employee', {
    method: 'PUT',
    body: JSON.stringify(holdData),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((result) => result.json())
    .then((result) => {
      if (result.err) {
        return swal('', result.err, 'error');
      }
      return swal('', result.message, 'success');
    }).catch(err => swal('', err, 'error'));
};

const show = (event, divName) => {
  links.forEach((link) => {
    link.className = link.className.replace('tabActive', '');
  });
  singleBody.forEach((body) => {
    body.style.display = 'none';
  });
  document.getElementById(divName).style.display = 'block';
  event.currentTarget.className += ' tabActive';
};

const editBtn = document.querySelectorAll('.editbtn');
editBtn.forEach((x) => {
  x.addEventListener('click', (event) => {
    const divParent = event.target.parentElement;
    const elements = divParent.querySelectorAll('.input-field');
    const btnSave = divParent.querySelector('.btn-save');
    const select = divParent.querySelectorAll('.status');
    elements.forEach((element) => {
      element.readOnly = false;
      element.className = element.className.replace('input-field', '');
      element.classList.add('input-field-editable');
    });
    select.forEach((element) => {
      element.disabled = false;
      element.classList.toggle('none');
      const span = element.parentElement.getElementsByTagName('span');
      span[0].classList.add('none');
    });
    btnSave.classList.remove('none');
    event.target.classList.add('none');
  });
});

const btnSave = document.querySelectorAll('.btn-save');
btnSave.forEach((x) => {
  x.addEventListener('click', (event) => {
    const divParent = event.target.parentElement;
    const elements = divParent.querySelectorAll('.input-field-editable');
    const btnEdit = divParent.querySelector('.editbtn');
    const form = divParent.querySelector('.form-update');
    const select = divParent.querySelectorAll('.status');
    elements.forEach((element) => {
      element.readOnly = true;
      element.className = element.className.replace('input-field-editable', '');
      element.classList.add('input-field');
    });
    select.forEach((element) => {
      element.disabled = true;
      element.classList.toggle('none');
      const valueOfOption = element.options[element.selectedIndex].text;
      const span = element.parentElement.getElementsByTagName('span');
      span[0].textContent = valueOfOption;
      span[0].classList.remove('none');
    });
    btnEdit.classList.remove('none');
    event.target.classList.add('none');
    sendData(form);
  });
});
