const logout = document.getElementById('logout');

logout.addEventListener('click', () => {
  fetch('/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: null,
  }).then(result => result.json())
    .then((result) => {
      swal('', result.message, 'success').then(() => {
        window.location.href = '/login';
      });
    });
});
