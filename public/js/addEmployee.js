const addEmployeeButton = document.getElementById('addEmp');
addEmployeeButton.addEventListener('click', (e) => {
  const newEmpForm = document.getElementById('newEmpForm');

  const formData = new FormData(newEmpForm);
  const newEmpData = {};
  formData.forEach((value, key) => {
    newEmpData[key] = value;
  });

  fetch('/addEmployee', {
    method: 'POST',
    body: JSON.stringify(newEmpData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(result => result.json())
    .then((result) => {
      if (result.err) {
        return swal('', result.err, 'error');
      }
      return swal('', result.message, 'success').then((value) => {
        window.location.href = '/employees';
      });
    });
});
