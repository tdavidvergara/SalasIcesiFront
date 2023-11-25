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
            console.log(card) ;
            window.localStorage.setItem('salaId'+card.id, card.id) ;
        });


    }

    
}


cancelarButton.addEventListener('click',function(){
    deleteRoom() ;

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

    async function deleteRoom(){
    let response = await fetch('http://localhost:8080/salasIcesi/misReservas/cancelar/'+  window.localStorage.getItem('salaId'), {
        method: 'DELETE',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {

        window.location.href= '/ReservaCancelada.html'; 
        localStorage.removeItem = ('num'+sala.id) ;

      
    } else {
        console.error('Error al eliminar la sala:', response.status, response.statusText);

        //window.location.reload(); 
    }
}

