const trash = document.querySelectorAll('#trash');
const add = document.getElementById('add');
const inputField = document.querySelector('#inputText');

trash.forEach((element) => {
  element.addEventListener('click', () => {
    const boxId = element.getAttribute('boxId');
    swal({
      title: '',
      text: 'بمجرد حذف الصندوق ﻻ يمكنك الاسترجاع',
      type: 'warning',
      showCancelButton: true,
    }).then((confirm) => {
      if (confirm.value) {
        const boxData = { boxId };
        fetch('/carts', {
          method: 'DELETE',
          body: JSON.stringify(boxData),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(result => result.json())
          .then((result) => {
            if (result.err) {
              swal('faild', result.err, 'failed');
            } else {
              swal('', result.message, 'success').then(() => {
                window.location.href = '/carts';
              });
            }
          }).catch(() => {
            swal('', 'فشلت عملية الحذف', 'failed');
          });
      }
    });
  });
});


add.addEventListener('click', () => {
  const purchaseBoxData = {
    name: inputField.value,
  };
  fetch('/carts', {
    method: 'POST',
    body: JSON.stringify(purchaseBoxData),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(result => result.json())
    .then((result) => {
      if (result.err) {
        swal('ﻻ يمكن الإضافة', result.err, 'failed');
      } else {
        swal('تم', result.message, 'success').then(() => {
          window.location.href('/carts');
        });
      }
    });
});
