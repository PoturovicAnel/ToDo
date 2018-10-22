$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); 

        var ValidUsername = $('#username').val() === 'Anel'; 
        var ValidPassword = $('#password').val() === 'Test'; 

        if (ValidUsername === true && ValidPassword === true) {
            $('.LoggedIn').css('display', 'block');
            $('.NotLoggedIn').hide();
            $("#logout").css('visibility', 'visible');
            $("#submit").css('visibility', 'hidden');
            
        }
        else {
            $('.NotLoggedIn').css('display', 'block'); 
            $('.LoggedIn').hide();
            $("#logout").css('visibility' , 'hidden');
            $("#submit").css('visibility' , 'visible');
            
        }
    });


    $('#logout').click(function() {
        window.location.href ="index.html";
    });


});