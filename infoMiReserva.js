var user = JSON.parse(localStorage.getItem('user'));
var sala = JSON.parse(localStorage.getItem('jsonSala'));
var foto = document.getElementById('foto') ;

if (user === null) {
    window.location.href = "/Registro.html";

} else {
    console.log(user.id) ; 
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
        console.log(json) ;
        json.forEach(salon => {
            var card = new InfoRervaCard(salon);
            foto.appendChild(card.render());
            console.log(card) ;
        });

    }
}
getInformation()