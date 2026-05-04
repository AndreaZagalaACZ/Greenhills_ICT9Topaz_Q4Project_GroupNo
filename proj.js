// JavaScript Login Authentication
let loginAttempts = 0;
const maxAttempts = 3;

function loginAuthentication() {
    const username = document.getElementById('input').value;
    const password = document.getElementById('input2').value;

    if (loginAttempts >= maxAttempts) {
        alert('You have used all 3 tries. Refresh the page to try again.');
        return;
    }

    for (let i = 0; i < 1; i++) {
        loginAttempts++;

        if (username === 'DonQuiLC' && password === 'HeroMili') {
            window.alert('Welcome back!');
            window.location.replace('dashboard.html');
            return;
        }

        if (loginAttempts < maxAttempts) {
            window.alert('Incorrect Username or Password. Try again ' + loginAttempts + '/' + maxAttempts + '.');
        } else {
            window.alert('Incorrect Username or Password. No more tries left.');
            document.getElementById('loginBtn').disabled = true;
        }
    }
}
