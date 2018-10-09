const createButton = document.getElementById('create');
const date = document.getElementById('month');
const saveButton = document.getElementById('save');

createButton.addEventListener('click', () => {
  const dateValue = date.value;
  const dateObject = { dateValue };
  fetch('/reports', {
    method: 'POST',
    body: JSON.stringify(dateObject),
    headers: {
      'Content-Type': 'application/json',
    },
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
