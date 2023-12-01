class SalaCard {
    constructor(sala) {
      this.sala = sala;
    }
  
    render() {

      const card = document.createElement('div');
      card.className = 'card mb-3';
      card.style.width = '80%';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent = 'Sala id: #' + this.sala.id;
      card.appendChild(cardTitle);

      const featuresList = document.createElement('ul');
  
      const feature1 = document.createElement('li');
      feature1.id = 'item1';
      feature1.textContent = 'Contraseña: ' + this.sala.token;
      featuresList.appendChild(feature1);
  
      const feature2 = document.createElement('li');
      feature2.id = 'item2';
      feature2.textContent = 'Estado: ' + this.sala.estado;
      featuresList.appendChild(feature2);
  
      const feature3 = document.createElement('li');
      feature3.id = 'item3';
      feature3.textContent = 'Hora de reserva: ' + this.sala.hora;
      featuresList.appendChild(feature3);

      const feature4 = document.createElement('li');
      feature4.id = 'item4';
      feature4.textContent = 'Día de reserva: ' + this.sala.dia;
      featuresList.appendChild(feature4);

    
      featuresList.appendChild(feature4);
      featuresList.appendChild(feature3);
      featuresList.appendChild(feature2);
      featuresList.appendChild(feature1);
      card.appendChild(featuresList);
  
      return card;
    }
  
    action(event) {
      event.preventDefault(); //Previene Ejecución de acción por defecto
    }
  }
  