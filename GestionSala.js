var InhabilitarSala = document.getElementById('InhabilitarSala')  ;
var user = localStorage.getItem('user');


    if (user === null) {
        window.location.href = "/Registro.html";

    } else {
        user = JSON.parse(user);
        console.log(user) ;
    }
