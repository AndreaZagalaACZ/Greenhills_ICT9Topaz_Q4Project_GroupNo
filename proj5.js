function changePassword() {
    do {
        password = prompt("Enter the new password longer than 8 characters", "");
    } while (password.length < 9);
    window.alert("New Password: " + password);
}
