var user = localStorage.getItem('user');
const sala = window.localStorage.getItem('sala');
var roomDetail = document.getElementById('roomDetail') ;
const guardarButton = document.getElementById('guardar');
const fechaInput = document.getElementById('fecha');
var horarioButtons = document.querySelectorAll('.btn-primary');
var salaId = localStorage.getItem('salaId')  ;
var username = document.getElementById('usuarioCorreo')  ;


if (user === null) {
    window.location.href = "/Registro.html";

} else {
    user = JSON.parse(user);
    console.log(user) ;
    getInformation();


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

    guardarButton.addEventListener('click', async function (event) {
        event.preventDefault();
        var username = document.getElementById('usuarioCorreo')  ;
        var fecha = fechaInput.value;
        var usernameValue = username.value ;
        console.log(usernameValue) ;
        if (!fecha || !hora || !usernameValue) {
            alert('Rellena todos los Campos');
            window.location.reload(); // Recargar la página
    
            return; 
        }
    
        var gestionSalaDTO = {
            correoUsuario: usernameValue,
            dia: fecha.toString(),
            hora: hora,
            idSala : salaId
        
        };
    
        var json = JSON.stringify(gestionSalaDTO);
        console.log(json);
        try{
        let response = await fetch('http://localhost:8080/salasIcesi/administrador/reservas/sala', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '1'
            },
            body: json
        });
    
        if (response.status === 200) {
        
            console.log(json) ;
            window.location.href  = "/SolicitudCompletada.html"  ;
        } else {
            alert('Esta sala no se puede reservar'); 
            window.location.reload();
            
        }
        
    
        
    } catch (error) {
        console.error('Error en la Solicitud ', error);
        console.log(await response.text());
        window.location.reload(); // Recargar la página

    
    
    }
    
    });
    

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

fechaInput.addEventListener("change", async function(){
    // Reiniciar los botones antes de hacer una nueva solicitud
    resetButtons();

    let response = await fetch('http://localhost:8080/salasIcesi/' + sala+"/"+fechaInput.value, {
        method: 'GET',
        headers: {
            'Authorization': '123'
        }
    });

    if (response.status === 200) {
        let horariosDisponibles = await response.json();
        let horariosDisponiblesTexto = horariosDisponibles.map(String);

        let botones = document.getElementsByClassName("btn");

        for (let i = 0; i < botones.length; i++) {
            let horarioBoton = botones[i].innerText;
            let aaa = horariosDisponiblesTexto.includes(horarioBoton);
            
            if (aaa) {
                botones[i].classList.add("btn-primary-busy");
                botones[i].disabled = true;
            } else {
                botones[i].classList.add("btn-primary");
            }
        }
    }
});

// Función para reiniciar los botones a su estado original
function resetButtons() {
    let botones = document.getElementsByClassName("btn");

    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("btn-primary-busy");
        botones[i].disabled = false;
    }
}


