const imagenSalon = document.getElementById('imagenSalon');
const roomDetail = document.getElementById('roomDetail');
const guardarButton = document.getElementById('guardar');
const sala = window.localStorage.getItem('sala');
const fechaInput = document.getElementById('fecha');
let horaSeleccionada ;


var user = localStorage.getItem('user');

if (user === null) {
    window.location.href = "/Registro.html";
} else {
    var user = JSON.parse(window.localStorage.getItem(user));
}

console.log(user);

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
        setupHoraButtons() ; 
        alert(await response.text());
    }
}


function setupHoraButtons() {
    const horaButtons = document.querySelectorAll('cambiarColor');

    horaButtons.forEach(function (boton) {
        boton.addEventListener('click', function (event) {
            horaSeleccionada = event.target.innerHTML;
            cambiarColor(boton);
            console.log('Hora seleccionada:', horaSeleccionada);
        });
    });
}

guardarButton.addEventListener('click', async function () {
    // Obtenemos la hora seleccionada
         // Creamos un objeto con la información de la sala
    var gestionSalaDTO = {
        idSala: sala,
        idUsuario: 1    , // Utilizamos el ID del usuario obtenido del local storage
        dia: fechaInput,
        hora: horaSeleccionada,
    };

    // Convertimos el objeto en un string JSON
    var json = JSON.stringify(gestionSalaDTO);

    // Enviamos la solicitud POST al servidor con los datos del objeto
    let response = await fetch('http://localhost:8080/salasIcesi/reservarSala', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '123'
        },
        body: json
    });

    // Procesamos la respuesta del servidor
    if (response.status === 200) {
        let respuesta = await response.text();
        alert(respuesta); // Mostramos el mensaje de éxito
    } else {
        alert(await response.text()); // Mostramos el mensaje de error
    }
    

   
});

getInformation();
