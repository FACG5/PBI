const addEmployeeButton = document.getElementById('addEmp');
saveSetting.addEventListener('click', (e) => {
  const newEmpForm = document.getElementById('settingForm');
  const formData = new FormData(newEmpForm);
  const newSettingData = {};
  formData.forEach((value, key) => {
    newSettingData[key] = value;
  });
  fetch('/setting', {
    method: 'POST',
    body: JSON.stringify(newSettingData),
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
        window.location.href = '/setting';
      });
    });
});
