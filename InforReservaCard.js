
class InfoRervaCard{

    constructor(sala){
        this.sala = sala;
        this.id = sala.id;
    }

    

     render(){
        
        let foto = document.createElement('div'); //<div></div>
        foto.classList.add('card');
        foto.style.width = '40%' ;
        foto.style.height = '110vh' ;

        var idSala = this.sala.id


        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', 'Imagenes/'+this.sala.numSala+'.jpg');
        img.style.width = '100%' ;
        img.style.height = '80%' ;


        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body');



        let title = document.createElement('h5');
        title.classList.add('card-title');

        let button = document.createElement('button') ;
        button.classList.add('btn') ;
        button.classList.add('btn-danger') ;
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#cancelar'); 
        button.innerHTML = "Cancelar Reserva" ;
        button.setAttribute('id', 'buttonCard' );


        let description = document.createElement('p') ;
        description.classList.add('card-text') ;

        let featuresList = document.createElement('ul');
        let feature1 = document.createElement('li');
        feature1.id = 'item1';
        feature1.textContent = "Token de Seguridad: " +this.sala.token;
        featuresList.appendChild(feature1);

        let feature2 = document.createElement('li');
        feature2.id = 'item1';
        feature2.textContent = "Horario de Reserva: " +this.sala.hora;
        featuresList.appendChild(feature2);

        let feature3 = document.createElement('li');
        feature3.id = 'item1';
        feature3.textContent = "Dia de Reserva: " +this.sala.dia;
        featuresList.appendChild(feature3);


        window.localStorage.setItem('idSala', idSala )  ;


        description.style.margin ="10px"

        cardbody.appendChild(title);
        cardbody.appendChild(description) ;
        foto.appendChild(img);
        foto.appendChild(cardbody);
        cardbody.appendChild(featuresList)  ;
        cardbody.appendChild(button) ;
        title.innerHTML = this.sala.numSala ;

        button.addEventListener('click', this.action.bind(this)) ;
        

        return foto;
        

      

      }   

      action(event){
        console.log(">>>>");
        event.preventDefault() ;  //Previene Ejecución de accion por defecto       
        window.localStorage.setItem('reservationToDelete', this.id);

    }


    }

