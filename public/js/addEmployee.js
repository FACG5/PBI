const addEmployeeButton = document.getElementById('addEmp');
const cerfications = document.getElementById('cerfications');
const newEmpForm = document.getElementById('newEmpForm');

const uploadFiles = async () => {
  const formData = new FormData();
  formData.append('cerfications', cerfications.files[0]);
  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  let result = await fetch('/uploadFiles', requestOptions);
  result = await result.json();
  const { name } = result;
  return name;
};
const addEmployee = (link) => {
  const employeeData = new FormData(newEmpForm);
  const newEmpData = {};
  employeeData.forEach((value, key) => {
    newEmpData[key] = value;
  });

  if (link) {
    const cerficationName = newEmpData.certificationName;
    const cerfication = { cerficationName, link };
    newEmpData.certifications = cerfication;
  }
  if (newEmpData.name.trim() && newEmpData.idNumber.trim()) {
    fetch('/addEmployee', {
      method: 'POST',
      body: JSON.stringify(newEmpData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(result => result.json())
      .then((result) => {
        if (result.err) {
          return swal('', result.err, 'error');
        }
        return swal('', result.message, 'success').then(() => {
          window.location.href = '/employees';
        });
      });
  } else {
    swal('Failed', 'الرجاء إدخال إسم الموظف  ورقم الهوية ! ', 'error');
  }
};

addEmployeeButton.addEventListener('click', async () => {
  if (cerfications.files[0]) {
    const name = await uploadFiles();
    addEmployee(name);
  } else {
    addEmployee();
  }
});
