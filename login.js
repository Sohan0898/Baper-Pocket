document.getElementById('login-btn').addEventListener('click', function(){

    // Email 
    const userEmail = document.getElementById('login-email');
    const email = userEmail.value;
    console.log(email);
    // Password 
    const userPassword = document.getElementById('login-password');
    const password = userPassword.value;
    console.log(password);

    // temporary use this method 

    if(email === 'sohan08@gmail.com' && password === 'google08'){
        window.location.href = 'pocket.html';
    }
    else {
        alert('বাপের পকেটেই নাই টাকা নিবো কেমনে !!!');
    }

})