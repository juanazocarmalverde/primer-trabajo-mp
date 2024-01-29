
/*$('#login').click(function(){
    event.preventDefault();

    console.log("Autenticado");

    $('#sucess-modal').modal('show');

    var tipo_acceso = $('#input-access').val();

    if(tipo_acceso == 'U'){
        setTimeout(
            function() 
            {
                window.location.href = 'home.html';
            }, 3000);
    }else {
        setTimeout(
            function() 
            {
                window.location.href = 'home-reclutadores.html';
            }, 3000);
    }

    
    
        
});*/


$('#logout').click(function(){
    event.preventDefault();

    console.log("Cierre de sesión");

    $('#logout-modal').modal('show');
    localStorage.removeItem('user');
    localStorage.removeItem('personal_token');
    setTimeout(
        function() 
        {
            window.location.href = 'index.html';
        }, 3000);
   
});


$('#register').click(function(){
    event.preventDefault();

    console.log("Registro de usuario");
    

    window.location.href = 'registro.html';
});

$('#btn-ver-todo-ofertas-reclutadores').click(function(){
    event.preventDefault();

    console.log("Registro de usuario");

    window.location.href = 'ofertas-reclutadores.html';
});



$('#register-employer').click(function(){
    event.preventDefault();

    console.log("Registro de usuario");

    window.location.href = 'registro-empleador.html';
});

$('#create-account-btn').click(function(){
    event.preventDefault();

    console.log("Registro de usuario");

});

$('#volver-index-btn').click(function(){
    event.preventDefault();

    console.log("Registro de usuario");
    window.location.href = 'index.html';
});




function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

  function re_password_show_hide() {
    var x = document.getElementById("re-password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }