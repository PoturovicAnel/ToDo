$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

        var ValidUsername = $('#username').val() === 'Anel'; 
        var ValidPassword = $('#password').val() === 'Test'; 

        if (ValidUsername === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.LoggedIn').css('display', 'block');
            $('.NotLoggedIn').hide();
            $("#logout").css('visibility', 'visible');
            $("#submit").css('visibility', 'hidden');
            
        }
        else {
            $('.NotLoggedIn').css('display', 'block'); // show error msg
            $('.LoggedIn').hide();
            $("#logout").css('visibility' , 'hidden');
            $("#submit").css('visibility' , 'visible');
            
        }
    });


    $('#logout').click(function() {
        window.location.href ="index.html";
    });


});