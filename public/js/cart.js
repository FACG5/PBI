const trash = document.querySelectorAll('#trash');
const add = document.getElementById('add');
const inputField = document.querySelector('#inputText');
const edit = document.querySelectorAll('.edit');

trash.forEach((element) => {
  element.addEventListener('click', (event) => {
    const parentRow = event.target.parentElement.parentElement;
    const boxId = parentRow.getAttribute('boxId');
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
        swal('', result.err, 'error');
      } else {
        swal('تم', result.message, 'success').then(() => {
          window.location.href = '/carts';
        });
      }
    });
});

edit.forEach((element) => {
  element.addEventListener('click', (event) => {
    const parentRow = event.target.parentElement.parentElement;
    const cartName = parentRow.querySelector('#cartName');
    cartName.readOnly = false;
    cartName.classList.add('inputEditable');
    element.style.display = 'none';
    const parentIcons = event.target.parentElement;
    const check = document.createElement('i');
    check.classList.add('fas', 'fa-check', 'check');
    parentIcons.appendChild(check);
    check.addEventListener('click', () => {
      cartName.classList.remove('inputEditable');
      element.style.display = 'inline-block';
      check.style.display = 'none';
      const boxId = parentRow.getAttribute('boxId');
      const newData = {
        name: cartName.value,
        boxId,
      };
      fetch('/carts', {
        method: 'PUT',
        body: JSON.stringify(newData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
        .then((result) => {
          if (result.err) {
            swal('', result.err, 'error').then(() => {
              window.location.href = '/carts';
            });
          } else {
            swal('', result.message, 'success').then(() => {
              window.location.href = '/carts';
            });
          }
        });
    });
  });
});
