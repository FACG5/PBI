const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('submit');


loginButton.addEventListener('click', () => {
  const adminDetails = {
    usernameValue: username.value,
    passwordValue: password.value,
  };
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(adminDetails),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  }).then(result => result.json())
    .then((result) => {
      if (result.err) {
        swal('', result.err, 'error');
      } else {
        swal('', result.message, 'success').then(() => {
          window.location.href = '/';
        });
      }
    });
});
