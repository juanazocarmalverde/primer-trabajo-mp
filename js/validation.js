
$('#login').click(function(){
    event.preventDefault();

    console.log("Autenticado");

    window.location.href = 'home.html';
});


$('#logout').click(function(){
    event.preventDefault();

    console.log("Cierre de sesión");

    window.location.href = 'index.html';
});


$('#register').click(function(){
    event.preventDefault();

    console.log("Registro de usuario");

    window.location.href = 'registro.html';
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