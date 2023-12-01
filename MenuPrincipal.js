const VerReservasId = document.getElementById('VerReservasId');
var user = JSON.parse(localStorage.getItem('user'));
var sala = JSON.parse(localStorage.getItem('jsonSala'));
var cerrarSesion = document.getElementById('cerrarSesion') ;
console.log(sala) ;

var CATEGORIA = localStorage.getItem('Categoria')  ;


  if (user === null) {
      window.location.href = "/Registro.html";

  } else {
      console.log(user);

  }

  if(CATEGORIA === 'ESTUDIANTE'){

  
      VerReservasId.addEventListener('click', async function (event) {
        event.preventDefault()
        window.location.href = '/InfoMiReserva.html';
      }); 

      cerrarSesion.addEventListener('click', async function(event){
        event.preventDefault() ;
        localStorage.clear();
        window.location.href = '/Registro.html' ;

      }) ;


  }




    