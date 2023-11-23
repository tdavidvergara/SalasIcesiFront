var user = localStorage.getItem('user');

    if (user === null) {
        window.location.href = "/Registro.html";
        console.log(user) ;
    } else {
        var user = JSON.parse(window.localStorage.getItem(user));
    }
