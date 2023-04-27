

let forgetPass = document.getElementById('forgetPass');
let forgetemailform = document.getElementById('forgetemailform');
let token = localStorage.getItem('token');

document.getElementById('loginBtn').addEventListener('click', (e) => {
  e.preventDefault()

  obj = JSON.stringify({
    email: document.getElementById('emailInput').value,
    password: document.getElementById('passwordInput').value
  })

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/user/login',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    data: obj
  };

  axios.request(config)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        document.location.href = '../DailyExpense/expense.html?'
      }
    })
    .catch((error) => {
      console.log(error.response);
      alert(error.response.data)
    });
})



forgetemailform.style.display = 'none';


forgetPass.addEventListener('click', (e) => {
  // e.preventDefault()
  forgetemailform.style.display = 'block';
  document.getElementById('submitForm').style.display = 'none'
})



document.getElementById('forgetBtn').addEventListener('click', (e) => {
  // e.preventDefault()

  let obj = {
    email: document.getElementById('forgetemailInput').value,
  }
  axios.post('/password/forgotpassword', obj, { headers: { 'Authorization': token } })
    .then(response => {
      alert('mail send to registered Email');
    })
    .catch(err => {
      console.log(err)
    })
})
