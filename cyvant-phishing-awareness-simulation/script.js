const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        console.log('⚠️ SIMULATION LOG: User attempted login with empty fields');
        return;
    }

    console.log('🎣 SIMULATION LOG: User submitted credentials');
    console.log('📧 Email entered: ' + emailValue);
    console.log('🕐 Timestamp: ' + new Date().toLocaleString());

    setTimeout(function() {
        window.location.href = 'awareness.html';
    }, 1500);console.log('🎣 SIMULATION LOG: User submitted credentials');
    console.log('📧 Email entered: ' + emailValue);
    console.log('🕐 Timestamp: ' + new Date().toLocaleString());

    setTimeout(function() {
        window.location.href = 'awareness.html';
    }, 1500);
});