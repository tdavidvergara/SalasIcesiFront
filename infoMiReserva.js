var user = JSON.parse(localStorage.getItem('user'));
var foto = document.getElementById('foto') ;
var cancelarButton = document.getElementById('cancelarButton') ;
 
if (user === null) {
    window.location.href = "/Registro.html";

} else {

    //
}

async function getInformation() {
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/'+user.id, {
        method: 'GET',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        var json = await response.json();
        console.log(json) ;
        json.forEach(salon => {
            var card = new InfoRervaCard(salon);
            foto.appendChild(card.render());
            console.log(card) ;
            console.log(card.id)  ;
            window.localStorage.setItem('salaId', card.id) ;


        });


    }

    
}


cancelarButton.addEventListener('click',function(){
    deleteRoom() ;

}) ;

    async function deleteRoom(){
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/cancelar/'+window.localStorage.getItem('salaId'), {
        method: 'DELETE',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        localStorage.removeItem('salaId') ;
        localStorage.removeItem('jsonSala') ;
        console.log('jsonSala') ;
        console.log('salaId') ;


        //window.location.href = '/ReservaCancelada.html';

        
    } else {
        console.error('Error al eliminar la sala:', response.status, response.statusText);

        //window.location.reload(); 
    }
}

getInformation()