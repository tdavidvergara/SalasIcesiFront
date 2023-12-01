var user = JSON.parse(localStorage.getItem('user'));
var spinnerContainer = document.querySelector('.spinner-container');
var verUsuariosButton = document.getElementById('verUsuarios') ;
var informacionCont = document.getElementById('informacion') ;
var verReservasButton = document.getElementById('verReservasButton') ;
var verSalasButton = document.getElementById('verSalasButton') ;

showSpinner(2000) ;


    if (user === null) {
        window.location.href = "/Registro.html";

    } else {
        console.log(user);
        hideSpinner(2000) ;

    }

    verSalasButton.addEventListener('click', async function(event){
        event.preventDefault() ; 
        informacionCont.innerHTML = '';

        let response = await fetch('http://localhost:8080/salasIcesi/administrador/salasAll', {
            method: 'GET',
            headers: {
                'Authorization': '123'
            }
        });

        if (response.status === 200) {
            json = await response.json();
            console.log(json) ;
            if (json === null || json.length === 0) {
                hideSpinner(2000) ;
                window.location.href = '/AdminSinSolicitud.html';
            } 
    
            json.forEach(salon => {
                var card = new SalaCardInfo(salon);
                informacionCont.appendChild(card.render());
            });
    
    
        }
    

    }) ;
    
    verReservasButton.addEventListener('click', async function(event){
        informacionCont.innerHTML = '';

        event.preventDefault() ;
        let response = await fetch('http://localhost:8080/salasIcesi/administrador/reservasAll', {
            method: 'GET',
            headers: {
                'Authorization': '123'
            }
        });

        if (response.status === 200) {
            json = await response.json();
            console.log(json) ;
            if (json === null || json.length === 0) {
                hideSpinner(2000) ;
                window.location.href = '/AdminSinSolicitud.html';
            } 
    
            json.forEach(salon => {
                var card = new SalaCard(salon);
                informacionCont.appendChild(card.render());
            });
    
    
        }
    
    })

    verUsuariosButton.addEventListener('click', async function(event){
        event.preventDefault() ;

           
        informacionCont.innerHTML = '';

        let response = await fetch('http://localhost:8080/salasIcesi/administrador/userAll', {
            method: 'GET',
            headers: {
                'Authorization': '123'
            }
        });
        if (response.status === 200) {
            json = await response.json();
            console.log(json) ;
            if (json === null || json.length === 0) {
                hideSpinner(2000) ;
                window.location.href = '/AdminSinSolicitud.html';
            } 
    
            json.forEach(salon => {
                var card = new UserCard(salon);
                informacionCont.appendChild(card.render());
            });
    
    
        }
    
        

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
