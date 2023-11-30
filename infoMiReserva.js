var user = JSON.parse(localStorage.getItem('user'));
var foto = document.getElementById('foto') ;
var cancelarButton = document.getElementById('cancelarButton') ;
var jsonSala;   
var spinnerContainer = document.querySelector('.spinner-container');

if (user === null) {
    window.location.href = "/Registro.html";
} else {
    showSpinner(2000) ;
    getInformation() ;

}

async function getInformation() {
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/'+user.id, {
        method: 'GET',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        jsonSala = await response.json();
        if (jsonSala === null || jsonSala.length === 0) {
            hideSpinner(2000) ;
            window.location.href = '/NoReservas.html';
        } 

        jsonSala.forEach(salon => {
            var card = new InfoRervaCard(salon);
            foto.appendChild(card.render());
        });


    }

    
}


cancelarButton.addEventListener('click',function(){
    let id = window.localStorage.getItem('reservationToDelete');
    console.log(`Vamos a eliminar ${id}`); 
    deleteRoom(id);

}) ;

function showSpinner(duration = 0) {
    setTimeout(() => {
        spinnerContainer.style.display = 'none';
    }, duration);
}

function hideSpinner(duration = 0) {
    setTimeout(() => {
        spinnerContainer.style.display = 'none';
    }, duration);
}

    async function deleteRoom(salaId){
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/cancelar/'+  salaId, {
        method: 'DELETE',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        localStorage.removeItem('salaId') ;
        window.location.href= '/ReservaCancelada.html'; 

      
    } else {
        console.error('Error al eliminar la sala:', response.status, response.statusText);

        //window.location.reload(); 
    }
}

