const createButton = document.getElementById('create');
const date = document.getElementById('month');
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
