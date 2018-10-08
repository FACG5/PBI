const saveSettingButton = document.getElementById('saveSetting');
const generalSettingForm = document.getElementById('generalSettingForm');


saveSettingButton.addEventListener('click', (e) => {
  const farmData = new FormData(generalSettingForm);
  const settingData = {};
  farmData.forEach((value, key) => {
    settingData[key] = value;
  });
  fetch('/generalSetting', {
    method: 'POST',
    body: JSON.stringify(settingData),
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
        window.location.href = '/generalSetting';
      });
    });
});
