const VerReservasId = document.getElementById('VerReservasId');
var user = JSON.parse(localStorage.getItem('user'));
var sala = JSON.parse(localStorage.getItem('jsonSala'));

if (user === null) {
    window.location.href = "/Registro.html";

} else {
    console.log(user);
    console.log(sala) ;

}
//let data = JSON.parse(user);


VerReservasId.addEventListener('click', async function (event) {
    if ( sala === null) {
        window.location.href = '/NoReservas.html';
      }else{
        window.location.href = '/InfoMiReserva.html';
      }

    }); 