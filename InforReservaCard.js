
class InfoRervaCard{

    constructor(sala){
        this.sala = sala;
    }

    

     render(){
        
        let foto = document.createElement('div'); //<div></div>
        foto.classList.add('card');

        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', 'Imagenes/'+this.sala.numSala+'.jpg');

        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body');
        cardbody.style.margin = "1cm";

        let title = document.createElement('h5');
        title.classList.add('card-title');

        let button = document.createElement('button') ;
        button.classList.add('btn') ;
        button.classList.add('btn-danger') ;
        button.setAttribute('data-bs-toggle', 'modal'); // Añade este atributo
        button.setAttribute('data-bs-target', '#cancelar'); // Añade este atributo
        button.innerHTML = "Cancelar Reserva"
        

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

        let feature4 = document.createElement('li');
        feature4.id = 'item1';
        var idSala = this.sala.id
        feature4.textContent = "id: " +idSala;
        window.localStorage.setItem('idSala',idSala )  ;

        featuresList.appendChild(feature4);

        description.style.margin ="10px"

        cardbody.appendChild(title);
        cardbody.appendChild(description) ;
        foto.appendChild(img);
        foto.appendChild(cardbody);
        cardbody.appendChild(featuresList)  ;
        cardbody.appendChild(button ) ;
        title.innerHTML = this.sala.numSala ;

        button.addEventListener('click', this.action.bind(this)) ;


        return foto;
        

      
   
      

      }   

      action(event){
        event.preventDefault() ;  //Previene Ejecución de accion por defecto       
        



    }


    }

