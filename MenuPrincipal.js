const VerReservasId = document.getElementById('VerReservasId');
var user = JSON.parse(localStorage.getItem('user'));
var sala = JSON.parse(localStorage.getItem('jsonSala'));
console.log(sala) ;

var CATEGORIA = localStorage.getItem('Categoria')  ;


  if (user === null) {
      window.location.href = "/Registro.html";

  } else {
      console.log(user);

  }

  if(CATEGORIA === 'ESTUDIANTE'){

  
      VerReservasId.addEventListener('click', async function (event) {
        window.location.href = '/InfoMiReserva.html';
      }); 


  }




    