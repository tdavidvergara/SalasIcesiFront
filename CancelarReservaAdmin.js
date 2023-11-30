var user = localStorage.getItem('user');
const sala = window.localStorage.getItem('sala');
var roomDetail = document.getElementById('roomDetail');
const cancelarReserva = document.getElementById('cancelarReserva');
const fechaInput = document.getElementById('fecha');
var horarioButtons = document.querySelectorAll('.btn-primary');
console.log(sala);

if (user === null) {
    window.location.href = "/Registro.html";
} else {
    user = JSON.parse(user);
    console.log(user);
    getInformation();

    var hora = ""; 

    horarioButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            hora = this.textContent;

            horarioButtons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('clicked');
                }
            });

            const clicked = this.classList.toggle('clicked');
            if (clicked) {
                console.log(hora);
            }
        });
    });

    cancelarReserva.addEventListener('click', async function (event) {
        event.preventDefault();
        var username = document.getElementById('usuarioCorreo');
        var fecha = fechaInput.value;
        var usernameValue = username.value;

        if (!fecha || !hora || !usernameValue) {
            alert('Rellena todos los Campos');
            return;
        }

        var gestionSalaDTO = {
            dia: fecha.toString(),
            hora: hora,
            numSala: sala
        };

        var json = JSON.stringify(gestionSalaDTO);

        try {
            let response = await fetch('http://localhost:8080/salasIcesi/administrador/cancelar', {
                method: 'DELETE',
                headers: {
                    'Authorization': '1',
                    'Content-Type': 'application/json' 
                },
                body: json
            });

            if (response.ok) {
                console.log(json);
                window.location.href = "/SolicitudCompletada.html";
            } else {
                alert('Error al cancelar la reserva, intenta de nuevo');
                window.location.reload(); // Recargar la página
            }
        } catch (error) {
            console.error('Error en la Solicitud ', error);
            console.log(await response.text());
            alert('Error al cancelar la reserva');
        }
    });
}

async function getInformation() {
    try {
        let response = await fetch('http://localhost:8080/salasIcesi/informacion/' + sala, {
            method: 'GET',
            headers: {
                'Authorization': '123'
            }
        });

        if (response.ok) {
            let json = await response.json();
            console.log(json);
            var card = new RoomCard(json);
            console.log(card.render());
            roomDetail.appendChild(card.render());
        } else {
            alert('Error al obtener la información de la sala');
        }
    } catch (error) {
        console.error('Error en la Solicitud ', error);
        alert('Error al obtener la información de la sala');
    }
}
