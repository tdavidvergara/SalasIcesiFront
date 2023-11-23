var user = localStorage.getItem('user');
let data = JSON.parse(user);

console.log(data.id) ;

    if (user === null) {
        window.location.href = "/Registro.html";
        console.log(user) ;
    } else {
        var user = JSON.parse(window.localStorage.getItem(user));
    }
