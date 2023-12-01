class SalaCardInfo{
    constructor(sala) {
      this.sala = sala;
    }
  
    render() {

      const card = document.createElement('div');
      card.className = 'card mb-3';
      card.style.width = '80%';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent =  this.sala.numSala;
      card.appendChild(cardTitle);

      const featuresList = document.createElement('ul');
  
      const feature1 = document.createElement('li');
      feature1.id = 'item1';
      feature1.textContent = 'id: ' + this.sala.id;
      featuresList.appendChild(feature1);
  
      const feature2 = document.createElement('li');
      feature2.id = 'item2';
      feature2.textContent = 'Capacidad: ' + this.sala.capacidad + ' personas';
      featuresList.appendChild(feature2);
  
      const feature3 = document.createElement('li');
      feature3.id = 'item3';
      feature3.textContent = 'Recursos:' + this.sala.recursos;
      featuresList.appendChild(feature3);

      const feature4 = document.createElement('li');
      feature4.id = 'item4';
      feature4.textContent = 'Estado: ' + this.sala.estado;
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
  