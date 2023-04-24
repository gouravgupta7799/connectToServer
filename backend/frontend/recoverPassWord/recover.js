
let idurl = document.URL;


document.getElementById('resetPassword').addEventListener('click', (e) => {
  // e.preventDefault()
  let newobj = {
    nameInput: document.getElementById('nameInput').value,
    emailInput: document.getElementById('emailInput').value,
    passwordInput: document.getElementById('passwordInput').value,
    id: idurl.split('=')[1]
  }
  axios.post('/password/resetPassword', newobj, { headers: { 'Content-Type': 'application/json' } })
    .then(res => {
      document.location.href = `../logIn/login.html`
    })

})

