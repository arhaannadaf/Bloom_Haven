 // Toggle password visibility
 function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm_password');
    const passwordVisibility = document.getElementById('show-password');

    if (passwordVisibility.checked) {
        passwordField.type = 'text'; // Show password
        confirmPasswordField.type = 'text'; // Show confirm password
    } else {
        passwordField.type = 'password'; // Hide password
        confirmPasswordField.type = 'password'; // Hide confirm password
    }
}

// Password strength check
const passwordInput = document.getElementById('password');
const passwordStrengthText = document.getElementById('password-strength');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    const result = zxcvbn(password); // Using zxcvbn to analyze password strength
    const score = result.score;

    // Provide feedback based on password strength score
    let strengthText = '';
    let strengthColor = '';

    switch (score) {
        case 0:
            strengthText = 'Very Weak';
            strengthColor = 'red';
            break;
        case 1:
            strengthText = 'Weak';
            strengthColor = 'orange';
            break;
        case 2:
            strengthText = 'Good';
            strengthColor = 'lightgreen';
            break;
        case 3:
            strengthText = 'Strong';
            strengthColor = 'green';
            break;
    }

    passwordStrengthText.innerHTML = `<strong>Password Strength:</strong> ${strengthText}`;
    passwordStrengthText.style.color = strengthColor;
});

// Password matching check before form submission
const form = document.querySelector('#registration-form');
form.addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Regular expression to check for letters, numbers, and special characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault(); // Prevent form submission
    } else if (!passwordRegex.test(password)) {
        alert('Password must contain at least one letter, one number, and one special character.');
        event.preventDefault(); // Prevent form submission
    }
});
