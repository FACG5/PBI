const tbody = document.querySelector('tbody');
const tr = tbody.querySelectorAll('tr');
const input = document.querySelector('#search');
const spaninfo = document.createElement('span');
const tdSpan = document.createElement('td');
tdSpan.setAttribute('colspan', 4);
tdSpan.appendChild(spaninfo);
spaninfo.textContent = 'لا يوجد موظف بهذا الاسم';
spaninfo.style.display = 'none';
tbody.appendChild(tdSpan);

input.addEventListener('input', () => {
  spaninfo.style.display = 'none';
  const filter = input.value;
  const itemNumber = [].slice.call(tr, 0).reduce((number, tRow) => {
    const td1 = tRow.getElementsByTagName('td')[0];
    if (td1.textContent.indexOf(filter) > -1) {
      tRow.style.display = '';
      return number + 1;
    }
    tRow.style.display = 'none';
    return number;
  }, 0);
  if (itemNumber === 0) spaninfo.style.display = '';
});
