let btn = $('#register');

btn.on('click', ()=>{
    $.ajax({
        method: 'POST',
        url: '/users/register',
        data: {
            username: $('#username').val(),
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            c_password: $('#password-confirm').val()
        },  
        success: (data) => {
            console.log(data);
            if(data.status){
                window.location.href = '/login'
            }
            
        }
    })
})
