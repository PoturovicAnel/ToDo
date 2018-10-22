$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

        var ValidUsername = $('#username').val() === 'Anel'; 
        var ValidPassword = $('#password').val() === 'Test'; 

        if (ValidUsername === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.LoggedIn').css('display', 'block');
        }
        else {
            $('.NotLoggedIn').css('display', 'block'); // show error msg
        }
    });
});