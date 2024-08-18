document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('userCode').value;
    
    if (code === 'sneha919') { // Replace 'correct_code' with your code
        window.location.href = 'page2.html';
    } else {
        alert('Incorrect code. Please try again.');
    }
});
