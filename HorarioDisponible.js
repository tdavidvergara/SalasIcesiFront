const imagenSalon = document.getElementById('imagenSalon');
const roomDetail = document.getElementById('roomDetail');
const guardarButton = document.getElementById('guardar');
const sala = window.localStorage.getItem('sala');
const fechaInput = document.getElementById('fecha');
var user = localStorage.getItem('user');
var salaId = localStorage.getItem('salaId') ;
var hora ;
var horarioButtons = document.querySelectorAll('.btn-primary');
var user = localStorage.getItem('user');
let data = JSON.parse(user);


if (user === null) {
    window.location.href = "/Registro.html";

} else {
    user = JSON.parse(user);
    console.log(user) ;

}

async function getInformation() {
    let response = await fetch('http://localhost:8080/salasIcesi/informacion/' + sala, {
        method: 'GET',
        headers: {
            'Authorization': '123'
        }
    });
    if (response.status === 200) {
        let json = await response.json();
        console.log(json);
        var card = new RoomCard(json);
        console.log(card.render());
        roomDetail.appendChild(card.render());

    }
}

horarioButtons.forEach(function (button) {

    button.addEventListener('click', function () {
        hora = this.textContent;
       
          // Desactiva clicked en todos los botones
          horarioButtons.forEach(function (otherButton) {
            
            if (otherButton !== button) {
                otherButton.classList.remove('clicked');
            }
        });
        const clicked = this.classList.toggle('clicked');
        if (clicked) {
            console.log(hora);
        }
        verDisponibilidad();
     
        
    });
});

var fecha = fechaInput.value;
console.log(fecha); 
verDisponibilidad() ;


guardarButton.addEventListener('click', async function (event) {

    event.preventDefault();
 

    if (!fecha || !hora) {
        alert('Olvidaste la fecha o la hora de la reserva');
        window.location.reload(); // Recargar la página

        return; 
    }

    var gestionSalaDTO = {
        hora: hora,
        dia: fecha.toString(),
        idUsuario: data.id,
        idSala: salaId,
    
    };

    var json = JSON.stringify(gestionSalaDTO);
    console.log(json);
    try{
    let response = await fetch('http://127.0.0.1:8080/salasIcesi/reservas/sala', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '1'
        },
        body: json
    });


    if (response.status === 200) {
          window.location.href = '/ReservaHecha.html';

    }else{
        alert('Error en la solicitud');
        window.location.reload(); // Recargar la página
    }

    
} catch (error) {
    console.error('Error en la Solicitud ', error);
    console.log(await response.text());
}

});


getInformation();


async function verDisponibilidad(){

    let response = await fetch('http://localhost:8080/salasIcesi/' +sala+'/'+fecha.toString(),{
        method: 'GET',
        headers: {
            'Authorization': '123'
        }
    });
    let json = await response.json();
        console.log(json);
}

