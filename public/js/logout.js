const logout = document.getElementById('logout');

logout.addEventListener('click', () => {
  swal({
    title: '',
    text: 'سيتم تسجيل الخروج الآن',
    type: 'warning',
    showCancelButton: true,
  }).then((confirm) => {
    if (confirm.value) {
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
    }
  });
});
