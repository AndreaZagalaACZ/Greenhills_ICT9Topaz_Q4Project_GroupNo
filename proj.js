// JavaScript Login Authentication
function loginAuthentication() {

    let loginAttempts = 0;
    const maxAttempts = 3;

    const username = document.getElementById('input').value;
    const password = document.getElementById('input2').value;

    for (let i = 0; i < 1; i++) {
    loginAttempts++;

    if (username === 'ilovepink123' && password === '514986878970') {
      window.alert('Welcome back!');
      window.location.href = 'dashboard.html';
      return;
    }

    if (loginAttempts < maxAttempts) {
      window.alert('Incorrect Username or Password. Try again ' + loginAttempts + '/' + maxAttempts + '.');
    } else {
      window.alert('Incorrect Username or Password. No more tries left.');
      document.getElementById('loginBtn').disabled = true;
    }
    }

   if (loginAttempts >= maxAttempts) {
    alert('You have used all 3 tries. Refresh the page to try again.');
    return;
   }
}
