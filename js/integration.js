function auth(user, password){
    $.ajax({
        url: 'http://localhost:8000/api/login', // URL del endpoint
        type: 'POST', // Tipo de solicitud
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer 1|3rF8RX0ixxfZiUbpdJD8kPhx9k0OKPrMf6Dyn5vEaf6bcad3'
        },
        data: 
            JSON.stringify({
                email: user,
                password: password
            }),
        success: function(response) {
            // Manejar la respuesta
            console.log('exito');
            console.log(response);
            var token = 'Bearer '+response.token;
            localStorage.setItem('personal_token', token);

        },
        error: function(xhr, status, error) {
            // Manejar errores
            console.log(xhr.responseJSON.code);
            console.log(xhr.responseJSON.message);
        }
    });
}

$('#login').click(function(){
    event.preventDefault();

    var usuario      = $('#email').val();
    var clave        = $('#password').val();
    var tipo_ingreso = $('#input-access').val();

    if((usuario == '' && clave == '') || (usuario == '' || clave == '')){
        $('#error-modal').modal('show');
        setTimeout(
            function() 
            {
                $('#error-modal').modal('hide')
                }, 3000);

                $('#email').val("");
                $('#password').val("");
                $('#email').focus();
    } else {
        var user = "john@doe.com";
        var password = "password";
    
        $.ajax({
            url: 'http://localhost:8000/api/login', // URL del endpoint
            type: 'POST', // Tipo de solicitud
            contentType: 'application/json',
            headers: {},
            data: 
                JSON.stringify({
                    email: user,
                    password: password
                }),
            success: function(response) {
                // Manejar la respuesta
                var token = 'Bearer '+response.token;
                localStorage.setItem('personal_token', 'Bearer '+response.token);
    
            },
            error: function(xhr, status, error) {
                // Manejar errores
                console.log(xhr.responseJSON.code);
                console.log(xhr.responseJSON.message);
            }
        }).then(function(data1) {
            // La primera llamada se ha completado, procesar data1 si es necesario
        
            return $.ajax({
                url: 'http://localhost:8000/api/usuarios/login', // URL del endpoint
                type: 'POST', // Tipo de solicitud
                contentType: 'application/json',
                headers: {
                    'Authorization': 'Bearer 1|3rF8RX0ixxfZiUbpdJD8kPhx9k0OKPrMf6Dyn5vEaf6bcad3'
                },
                data: 
                    JSON.stringify({
                        correo_acceso: usuario,
                        clave_acceso: clave
                    }),
                success: function(response) {
                    // Manejar la respuesta
                    var code = response.metadata.code;
                    var message = response.metadata.message;
                    var tipo_usuario = response.data.tipo_usuario;        
                    if(code == '200'){
                        localStorage.setItem('user', JSON.stringify(response.data));
                        if(tipo_ingreso == 'U'){
                            if(tipo_usuario == 'U'){
                                $('#sucess-modal').modal('show');
                                $('#p-ok-msg').html(message);
                                setTimeout(function(){
                                        window.location.href = 'home.html';
                                    }, 3000);
                            } else {
                               $('#error-modal').modal('show');
                                $('#p-error-msg').html("El tipo de acceso no corresponde al usuario");
                                setTimeout(
                                    function() 
                                    {
                                        $('#error-modal').modal('hide')
                                        }, 3000);
                                
                            }                           
                        }else if(tipo_ingreso == 'E'){
                            if(tipo_usuario == 'E'){
                                $('#sucess-modal').modal('show');
                                $('#p-ok-msg').html(message);
                                setTimeout(function(){
                                        window.location.href = 'home-reclutadores.html';
                                    }, 3000);
                            } else {
                                $('#error-modal').modal('show');
                                $('#p-error-msg').html("El tipo de acceso no corresponde al usuario");
                                setTimeout(
                                    function() 
                                    {
                                        $('#error-modal').modal('hide')
                                        }, 3000);
                                
                            } 
                        } else {
                            console.log('tipo de ingreso no valido');
                        }
                    }
        
                },
                error: function(xhr, status, error) {
                    // Manejar errores
                    var message = xhr.responseJSON.metadata.message;
                    console.log(message);
                    console.log(error);
                    $('#error-modal').modal('show');
                    $('#p-error-msg').html(message);
                    setTimeout(
                        function() 
                        {
                            $('#error-modal').modal('hide')
                            }, 3000);
                    
                   
                }
            });
        });
    }
   
});


$('#comprar-curso').click(function(){ 
    event.preventDefault();
    console.log("comprando curso");

        var buy_order_trx  = "ordenCompra12345678";
        var session_id_trx = "sesion1234557545";
        var amount_trx     = 5000;
    
        $.ajax({
            url: 'http://localhost:8000/api/webpay/transactions', // URL del endpoint
            type: 'POST', // Tipo de solicitud
            contentType: 'application/json',
            headers: {
                'Authorization': localStorage.getItem("personal_token")
            },
            data: 
                JSON.stringify({
                    buy_order: buy_order_trx,
                    session_id: session_id_trx,
                    amount: amount_trx
                }),
            success: function(response) {
                // Manejar la respuesta
                var token = response.token;
                var url = response.url;
                localStorage.setItem('webpay_token', token);
                $('#token_ws').val(token);
                $("#form-compra-curso").attr('action', url);
                $("#form-compra-curso").submit();
            },
            error: function(xhr, status, error) {
                // Manejar errores
                console.log(xhr.responseJSON.code);
                console.log(xhr.responseJSON.message);
            }
        });
});