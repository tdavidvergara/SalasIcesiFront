var inhabilitarSala = document.getElementById('InhabilitarSala')  ;
var user = localStorage.getItem('user');
var salaId = localStorage.getItem('salaId') ;
var InhabilitarSalaButton = document.getElementById('InhabilitarSala');
var modalConfirmacion = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
var cerrar = document.getElementById("cerrar") ;
var cerrarModalConfirmacion = document.getElementById("cerrarModalConfirmacion") ;
var habilitarButton = document.getElementById('habilitarButton')  ;
var modalConfirmacionHabilitar = new bootstrap.Modal(document.getElementById('modalConfirmacionHabilitar'))  ;

console.log (salaId) ;

    if (user === null) {
        window.location.href = "/Registro.html";

    } else {
        user = JSON.parse(user);
        console.log(user) ;
    }


inhabilitarSala.addEventListener('click', async function(event){
    event.preventDefault();
    try{

        let response = await fetch('http://localhost:8080/salasIcesi/administrador/inhabilitarSala/'+salaId, {
            method: 'PUT',
            headers: {
                'Authorization': '1'
            }
        });

        if (response.status === 200) {
            modalConfirmacion.show();
            cerrar.addEventListener('click' , function(){
            window.location.href  = "/SolicitudCompletada.html"  ;
            }) ;
        }else{
            alert('No se pudo realizar la solicitud') ;
            window.location.reload() ;
        }
    
    }catch{
        alert('No se pudo realizar la solicitud') ;
        window.location.reload() ;
    }
      

}) ;

habilitarButton.addEventListener('click', async function(event){
    event.preventDefault();
    try{

        let response = await fetch('http://localhost:8080/salasIcesi/administrador/habilitar/'+salaId, {
            method: 'PUT',
            headers: {
                'Authorization': '1'
            }
        });

        if (response.status === 200) {
            modalConfirmacionHabilitar.show();
            cerrarModalConfirmacion.addEventListener('click' , function(){
            window.location.href  = "/SolicitudCompletada.html"  ;
            }) ;
             }else{
            alert('No se pudo realizar la solicitud') ;
            window.location.reload() ;
        }
    
    }catch{
        alert('No se pudo realizar la solicitud') ;
        window.location.reload() ;
    }
      

}) ;
