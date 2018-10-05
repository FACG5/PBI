const createButton = document.getElementById('create');
const date = document.getElementById('month');
createButton.addEventListener('click', (e) => {
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
