const createButton = document.getElementById('create');
const date = document.getElementById('month');
const saveButton = document.getElementById('save');

createButton.addEventListener('click', () => {
  const dateValue = date.value;
  const dateObject = { dateValue };
  swal({
    title: `سيتم إنشاء تقارير لشهر ${dateValue} `,
    text: 'سيتم الكتابة فوق تقارير الشهر الذي تم اختياره',
    type: 'warning',
    showCancelButton: true,
  }).then((confirm) => {
    if (confirm.value) {
      fetch('/reports', {
        method: 'POST',
        body: JSON.stringify(dateObject),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
        .then((result) => {
          if (result.err) return swal('', result.err, 'error');
          return swal('', 'تم إنشاء التقارير المطلوبة , يمكنك تحميلها', 'success');
        });
    }
  });
});

saveButton.addEventListener('click', () => {
  const dateValue = date.value;
  fetch(`/downloadReports/${dateValue}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(result => result.blob())
    .then((report) => {
      const url = window.URL.createObjectURL(report);
      const a = document.createElement('a');
      a.href = url;
      a.download = `PBI - Report of ${dateValue}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
});
