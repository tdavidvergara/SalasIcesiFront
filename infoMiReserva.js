var user = JSON.parse(localStorage.getItem('user'));
var sala = JSON.parse(localStorage.getItem('jsonSala'));
var foto = document.getElementById('foto') ;
var cancelarButton = document.getElementById('cancelarButton') ;
const idSala = window.localStorage.getItem('idSala') ; 
console.log(sala) ;
if (user === null) {
    window.location.href = "/Registro.html";

} else {
    console.log(idSala) ; 
    // Si necesitas el objeto de usuario, puedes usar 'data' en esta rama
}

async function getInformation() {
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/'+user.id, {
        method: 'GET',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        let json = await response.json();
        // Convertir el array a JSON (cadena)
        let jsonString = JSON.stringify(json);
        console.log(jsonString);
        console.log(json) ;
        json.forEach(salon => {
            var card = new InfoRervaCard(salon);
            foto.appendChild(card.render());
            console.log(card) ;
        });

    }
}


cancelarButton.addEventListener('click',function(){
    deleteRoom() ;

}) ;



async function deleteRoom(){
    console.log(idSala)  ;
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/cancelar/'+idSala, {
        method: 'DELETE',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        window.location.href = '/ReservaCancelada.html';

        
    } else {
        console.error('Error al eliminar la sala:', response.status, response.statusText);
        const errorDetails = await response.json();
        console.error('Detalles del error:', errorDetails);
        window.location.reload(); 
    }
}

getInformation()