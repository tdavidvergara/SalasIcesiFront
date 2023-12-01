var EdificoId = ['E', 'M', 'B'] ; 
var user = localStorage.getItem('user');
var cerrarSesion = document.getElementById('cerrarSesion') ;

if (user === null) {
    window.location.href = "/Registro.html";
} else {
    var user = JSON.parse(window.localStorage.getItem(user));
} 


function manejarClicSalon(event) {
    event.preventDefault();
    var salonSeleccionado = event.target.innerHTML;
    window.localStorage.setItem("Edificio", salonSeleccionado);
    var CATEGORIA = localStorage.getItem('Categoria')  ;
    if(CATEGORIA === 'ADMINNISTRADOR'){
        console.log(CATEGORIA) ;
        window.location.href = "/EdificioAdmin.html";
    }else if(CATEGORIA === 'ESTUDIANTE'){
        window.location.href = "/Edificio.html";

    }

}

    EdificoId.forEach(function (salonId) {
        var salonElemento = document.getElementById(salonId);
        salonElemento.addEventListener('click', manejarClicSalon);
    });

    cerrarSesion.addEventListener('click', async function(event){
        event.preventDefault() ;
        localStorage.clear();
        window.location.href = '/Registro.html' ;

    }) ;

