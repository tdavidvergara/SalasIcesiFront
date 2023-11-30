const VerReservasId = document.getElementById('VerReservasId');
var user = JSON.parse(localStorage.getItem('user'));
var sala = JSON.parse(localStorage.getItem('jsonSala'));
console.log(sala) ;

if (user === null) {
    window.location.href = "/Registro.html";

} else {
    console.log(user);

}
//let data = JSON.parse(user);


VerReservasId.addEventListener('click', async function (event) {
  window.location.href = '/InfoMiReserva.html';
}); 

    