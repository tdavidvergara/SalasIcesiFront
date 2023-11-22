var EdificoId = ['E', 'M', 'B'] ; 
var user = localStorage.getItem('user');

if (user === null) {
    window.location.href = "/Registro.html";
} else {
    var user = JSON.parse(window.localStorage.getItem(user));
} 


function manejarClicSalon(event) {
    event.preventDefault();
    var salonSeleccionado = event.target.innerHTML;
    window.localStorage.setItem("Edificio", salonSeleccionado);
    window.location.href = "/Edificio.html";

}

EdificoId.forEach(function (salonId) {
    var salonElemento = document.getElementById(salonId);
    salonElemento.addEventListener('click', manejarClicSalon);
});

