window.addEventListener('load', function() {
    Swal.fire({
        title: 'Información importante',
        text: 'La información presentada en esta página relacionada con nombres de agentes, entidades y cualquier otro dato sensible, fue modificada para no comprometer los datos oficiales',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
});

document.getElementById('type-select').addEventListener('change', updateItems);
document.getElementById('item-select').addEventListener('change', updateActiveWork);
//document.getElementById('autocomplete-container').querySelector('p');

function updateItems() {
    const typeSelected = document.getElementById('type-select').value;
    const itemSelect = document.getElementById('item-select');
    itemSelect.innerHTML = '<option value="">Selecciona una opción</option>';
    if (typeSelected) {
        const uniqueValues = [...new Set(obras.map(item => item[typeSelected]))];
        uniqueValues.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            itemSelect.appendChild(option);
        });
    }
}

let previousSelectedParagraph = null;

function updateActiveWork() {
    let type = document.getElementById("type-select").value;
    let item = document.getElementById("item-select").value;
    let autocompleteSection = document.getElementById("autocomplete-container");
    
    let resultados = '';

    for (let i = 0; i < obras.length; i++) {
        if (obras[i][type] === item) {
            resultados += `<p>${obras[i].obra}</p>`;
        }
    }

    autocompleteSection.innerHTML = resultados || 'No se encontró la obra';

    
    let divContainer = document.getElementById('autocomplete-container')
    let paragraphs = divContainer.querySelectorAll('p');
    paragraphs.forEach((pTag) => {
        pTag.addEventListener('click', function() {
            executeFunction(pTag);
        });
    });
}

function executeFunction(pTag) {
    
    if (previousSelectedParagraph) {
        previousSelectedParagraph.classList.remove('active');
    }
    
    pTag.classList.add('active');
    
    previousSelectedParagraph = pTag;

    const result = obras.find(obra => obra.obra === pTag.textContent);
    
    // Si se encuentra el resultado, mostrar el municipio en el input
    if (result) {
        document.getElementById('data-water-basin').value = result.cuenca;
        document.getElementById('data-municipality').value = result.municipio;
        document.getElementById('data-entity').value = result.entidad;
        document.getElementById('data-workers').value = result.trabajadores;
        document.getElementById('data-meters').value = result.metros;

        if (result.hrefMap) {
            document.getElementById('iframe-map').style.display = 'block';
            document.getElementById('iframe-map').src = result.hrefMap;
        } else {
            document.getElementById('iframe-map').style.display = 'none';
            document.getElementById('iframe-map').src = '';
        }
        
    } else {
        document.getElementById('data-water-basin').value = '';
        document.getElementById('data-municipality').value = '';
        document.getElementById('data-entity').value = '';
        document.getElementById('data-workers').value = '';
        document.getElementById('data-meters').value = '';
        document.getElementById('iframe-map').style.display = 'none';
        document.getElementById('iframe-map').src = '';
    }
}

const obras = [
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo',	
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',	
        municipio: 'Almirante Brown',	
        entidad: 'Asociación Civil La Estación',	
        supervisorTerritorial: 'Barrios, Alejandro',	
        responsableCarga: 'Rivero, Ismael',	
        trabajadores: 20,	
        metros: 3770,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1g-iT_84k6LdDe-PWtPXssP8BVdoAQbo&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Almirante Brown',
        entidad: 'Asociación Civil La Estación',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Rivero, Ismael',
        trabajadores: 20,
        metros: 3000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1WfBheXQy3jyQyv40PA0wn5vykw2ilsc&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Almirante Brown',
        entidad: 'Cooperativa de Trabajo Creciendo Juntos Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Rivero, Ismael',
        trabajadores: 25,
        metros: 6600,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1e0_x7ldOks-QjAjbqw6Mzm_BrnqcCfA&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Almirante Brown',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Rivero, Ismael',
        trabajadores: 25,
        metros: 5700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1pmiu2FX_ktL5QUk-Ia-nTXo2Z7rcLp8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Almirante Brown',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Rivero, Ismael',
        trabajadores: 30,
        metros: 4430,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1d0vMqj-FYT-3f4d1MmlIaIe1ySk-_kE&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente',
        cuenca: 'Cuenca Arroyo Las Conchitas',
        municipio: 'Berazategui',
        entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 25,
        metros: 7300,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1ehE6W5zIZrb7piWPCtZf6TgIiGx-ivY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente',
        cuenca: 'Cuenca Arroyo Pereyra',
        municipio: 'Berazategui',
        entidad: 'Cooperativa de Trabajo El Progreso Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 25,
        metros: 6310,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1t7RqMd5GP3Hlu4VjSCzrn5WtiX40C7I&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte',
        cuenca: 'Cuenca Arroyo Jimenez',
        municipio: 'Berazategui',
        entidad: 'Cooperativa de Trabajo El Progreso Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 25,
        metros: 5800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1hTXIufwxjce_AKlNAlPawe34Dvpsl_A&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente',
        cuenca: 'Área de bañados',
        municipio: 'Berisso',
        entidad: 'Cooperativa de Trabajo El Gorrión Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 25,
        metros: 4970,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1uB0J_3IAgJ-p2buBscNBihiDOMVwva8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener',
        cuenca: 'Cuenca Río Samborombón',
        municipio: 'Brandsen',
        entidad: 'Cooperativa de Trabajo Distrito Sur Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 25,
        metros: 5700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1osLaVEBNnWNyUqCdo3arernes10m7nI&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni',
        cuenca: 'Cuenca Río Samborombón',
        municipio: 'Brandsen',
        entidad: 'Cooperativa de Trabajo Orgullo Local Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 26,
        metros: 4800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=13kZC_JC0vThSKGZOOBWN2jMwxhrOjjM&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba',
        cuenca: 'Cuenca Río Samborombón',
        municipio: 'Brandsen',
        entidad: 'Cooperativa de Trabajo Orgullo Local Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 28,
        metros: 3870,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1L0dgqfP1OOYDBMhMXYoLVSaZWrhOgC4&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Campana',
        entidad: 'Cooperativa de Trabajo Nuevos Comienzos Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 40,
        metros: 5550,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1YxlWr075Bym5cWZJq3SUekgHDGn6CAw&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte',
        cuenca: 'Cuenca Río Salado',
        municipio: 'Chascomús',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Ávila, Raúl',
        responsableCarga: 'Ávila, Raúl',
        trabajadores: 25,
        metros: 4700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=11jIoOEKkPoxkGxkfu1O1iGYhtHerKec&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente',
        cuenca: 'Cuenca Río Salado',
        municipio: 'Chascomús',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Ávila, Raúl',
        responsableCarga: 'Ávila, Raúl',
        trabajadores: 25,
        metros: 4900,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1qPUNiLpH6C6X0KVYW83UyuduuIfwSLA&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna',
        cuenca: 'Cuenca Río Salado',
        municipio: 'Chascomús',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Ávila, Raúl',
        responsableCarga: 'Ávila, Raúl',
        trabajadores: 25,
        metros: 4800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1KPoTnVSklbHCH6S_MQJBWGAo3BtGHyc&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca',
        cuenca: 'Área de bañados',
        municipio: 'Ensenada',
        entidad: 'Cooperativa de Trabajo La Morena Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 25,
        metros: 6400,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1QGsrgKSfjJHF0Ia3SKTukMI7ky1OeTE&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Escobar',
        entidad: 'Cooperativa de Trabajo Revolución Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 6750,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1IerT4dg-VAgu3MhyfRiHtRf83vE7ZHE&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Escobar',
        entidad: 'Cooperativa de Trabajo Fuerza Obrera Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 3800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=15dzWgd9G41cXrd1QCCWwd8H8lpjjw6M&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Garín',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Escobar',
        entidad: 'Cooperativa de Trabajo Nuevos Comienzos Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 5240,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1G3mXdXkR0gxYN98Y_4Op4kDn4P4Pu9w&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Esteban Echeverría',
        entidad: 'Cooperativa de Trabajo La Morena Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Pereyra, Nora',
        trabajadores: 25,
        metros: 6385,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Z6rEUVcHJJdC1OtLTg_SjNueN7-kZXk&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Ezeiza',
        entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 25,
        metros: 5000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1VMwcQs2Nv0bAHCRAsZay1G_e2xxBd9U&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Ezeiza',
        entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 25,
        metros: 6200,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1rX5I4soE6taZY4SaZwvaHzkHLIu01BY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Ezeiza',
        entidad: 'Cooperativa de Trabajo Nuestra Señora del Luján Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Gimenez, Luka',
        trabajadores: 25,
        metros: 4700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1aDkWD4FjQpr6aZNve0JBiXvMDViZfCQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas',
        cuenca: 'Cuenca Arroyo Las Conchitas',
        municipio: 'Florencio Varela',
        entidad: 'Cooperativa de Trabajo Eva Duarte Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Rivero, Ismael',
        trabajadores: 20,
        metros: 6000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1pk-rjaF9pRs2Xf7Z9QaHv7244gHZAx4&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Juan',
        cuenca: 'Cuenca Arroyo Jimenez',
        municipio: 'Florencio Varela',
        entidad: 'Cooperativa de Trabajo Eva Duarte Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Rivero, Ismael',
        trabajadores: 20,
        metros: 3000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1UTDqF4osx2W48X7CN4DVw7a8LXskziI&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf',
        cuenca: 'Cuenca de los Arroyos La Tapera, Santa Elena, Seco',
        municipio: 'General Pueyrredón',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Ávila, Raúl',
        responsableCarga: 'Ávila, Raúl',
        trabajadores: 25,
        metros: 3600,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1pNlLqdkc5lvL16KPnAmGYlIdIqkRSdQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes',
        cuenca: 'Cuenca de los Arroyos Lobería y Corrientes',
        municipio: 'General Pueyrredón',
        entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
        supervisorTerritorial: 'Ávila, Raúl',
        responsableCarga: 'Ávila, Raúl',
        trabajadores: 30,
        metros: 7450,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1tdk8RNC6VSCKspA9hW6N8SARGRFyAfQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General Rodríguez',
        entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Pereyra, Nora',
        trabajadores: 25,
        metros: 5920,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1akg1fx61sghlDenviDe64gJUBqMblug&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General Rodríguez',
        entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Blanco, Samuel',
        trabajadores: 25,
        metros: 4830,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Pwqtg-Da-L3Wq2kEJKL63Tt1eGGGRXQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General Rodríguez',
        entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Blanco, Samuel',
        trabajadores: 25,
        metros: 6525,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Ij5U18px3OakN_esHdSez7cbVLcOGH0&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General Rodríguez',
        entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Blanco, Samuel',
        trabajadores: 25,
        metros: 7500,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1NXF7E54gnJ08B4bIc3PJtK0RvlZca0c&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de la Cañada Álvarez',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General Rodríguez',
        entidad: 'Cooperativa de Trabajo Las Golondrinas Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Blanco, Samuel',
        trabajadores: 25,
        metros: 4400,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1LyKd2uRkFObORWnNp8Xubhgfi3t_8Nw&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General Rodríguez',
        entidad: 'Cooperativa de Trabajo Las Golondrinas Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Blanco, Samuel',
        trabajadores: 25,
        metros: 5780,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1MavETonXty3-qunf2egJ_k4sBlyKfZM&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General San Martín',
        entidad: 'Cooperativa de Trabajo 25 de Mayo',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 3130,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1iSnB6RWpqxuxeNjNj4oN7LHYkHG7vcI&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'General San Martín',
        entidad: 'Cooperativa de Trabajo Revolución Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 3880,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=18KE5HqIDbjEozoiaW_Md8wz9LrWnaoc&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Soto',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Hurlingham',
        entidad: 'Cooperativa de Trabajo El Gorrión Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'González, Carla',
        trabajadores: 25,
        metros: 5800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1P7i2ELJU3A8T_KjBMN40fvZTUoiADE8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Pinazo',
        cuenca: 'Cuenca Río Luján',
        municipio: 'José C. Paz',
        entidad: 'Cooperativa de Trabajo Perseverancia Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 4160,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1JWY5qFDqxr4ybgRIB1BbHrpe6FIScco&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui',
        cuenca: 'Cuenca Río Luján',
        municipio: 'José C. Paz',
        entidad: 'Cooperativa de Trabajo Sueños Compartidos Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 5380,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1wYWDNIHfCZKopu426KgaccQS7kiCbmY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá',
        cuenca: 'Cuenca Río Luján',
        municipio: 'José C. Paz',
        entidad: 'Cooperativa de Trabajo Sueños Compartidos Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 5700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1F1sMMx7Qyt4vO7QRKfGmrvNNJjH2_-E&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'La Matanza',
        entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Teresa Colman',
        trabajadores: 32,
        metros: 7280,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1OWuWbSazSY8MFnlAXj6AsSIFsF3hUBQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'La Matanza',
        entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Teresa Colman',
        trabajadores: 32,
        metros: 6950,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1dzTSdqR-niDoaRtMEia1W8ChXZnUrOQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Dupi',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'La Matanza',
        entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Teresa Colman',
        trabajadores: 35,
        metros: 2450,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1ltjxaLd_iXOBuMr4b8Y6qtf2-jbw1XY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'La Matanza',
        entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Teresa Colman',
        trabajadores: 25,
        metros: 3960,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1u1C0rAcznAxqE_jimnF0-0IEO9Z7U3U&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'La Matanza',
        entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Teresa Colman',
        trabajadores: 25,
        metros: 3400,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1F1cymQLMq6BRSLytE8ZZex3nTWimaik&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'La Matanza',
        entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
        supervisorTerritorial: 'Toledo, Pablo',
        responsableCarga: 'Teresa Colman',
        trabajadores: 25,
        metros: 4865,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=14hsyqXO5ZsU9e2SRrlA9cj_8Y9YIhnc&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado',
        cuenca: 'Área de bañados',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Renovación Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 7000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1bQ8bJboNaDi--WrpqUGPrbK9vGHv0NY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486',
        cuenca: 'Cuenca Arroyos Rodríguez y Don Carlos',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Renovación Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 4660,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1SGgekCZ5USp2CjVEBB4ihaj_d0Dwj6Y&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval',
        cuenca: 'Cuenca Arroyo Pereyra',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Renovación Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 4800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1wSN6hA0hQJnVB3vhngjFqR3YjsHRtsE&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet',
        cuenca: 'Cuenca Arroyo El Gato',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Esperanza viva Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 7100,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=194pv0L_akEFi1bUJ31SW8E9N05xuzNs&ehbc=2E312F&noprof=1'
    },
        
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos',
        cuenca: 'Cuenca Arroyo El Gato',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Esperanza viva Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 30,
        metros: 9000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1v-G9lw8NogCvvk2fxTZhJyKcmiuU1lo&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato',
        cuenca: 'Cuenca Arroyo El Gato',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Esperanza viva Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 5000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=199fEpWR1mdQ3tikXNXX3PCUs1BoY_N4&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente',
        cuenca: 'Cuenca Arroyo El Gato',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Manos Creativa Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 4245,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1xvtCEs1BAwitxyBYD6jYq0GaPqy6drs&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval',
        cuenca: 'Cuenca Arroyos Martín y Carnaval',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Fuerza Nacional Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 10600,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=18j-khS5Gq3xGSDmf_MCC5LSUB4XdWPs&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes',
        cuenca: 'Cuenca Arroyo El Gato',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Fuerza Nacional Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 7640,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1FlG6XP3ANuS1nzgA1IwIrrDKalOHXGQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez',
        cuenca: 'Cuenca Arroyos Rodríguez y Don Carlos',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Pueblo Mío Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 7640,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1SMkQIHlbTMWx0x9-C7k8PEyBgTrsmI8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio',
        cuenca: 'Cuenca Arroyo Maldonado',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Pueblo Mío Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 11100,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1GWLll204LrN0mLlg8RpbXqcC18mQIX4&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3',
        cuenca: 'Cuenca Arroyo El Gato',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Dignidad y Justicia Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 10300,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1X-KEL4F4ob2L5xXtzUPhE3iFBpk9SIM&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente',
        cuenca: 'Cuenca Arroyos Martín y Carnaval',
        municipio: 'La Plata',
        entidad: 'Cooperativa de Trabajo Nuevos Comienzos Ltda.',
        supervisorTerritorial: 'López, Francisco',
        responsableCarga: 'Moyano, Matías',
        trabajadores: 25,
        metros: 8500,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1lGP2A--ZAVAH5qan3NQ9PxFl7fceL7M&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Lomas de Zamora',
        entidad: 'Cooperativa de Trabajo Independencia',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'López, Alejandra',
        trabajadores: 25,
        metros: 1770,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1xOZ1-a9GvWLNc-4xO5bBz4xIuZM50-c&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo del Rey',
        cuenca: 'Cuenca Río Matanza - Riachuelo',
        municipio: 'Lomas de Zamora',
        entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'López, Alejandra',
        trabajadores: 32,
        metros: 4360,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1c6Cpv4DmWZ38vNy_rjpWlGrTsLXgOJ0&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Malvinas Argentinas',
        entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Pereyra, Nora',
        trabajadores: 25,
        metros: 6500,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=18kTtVKsKrd36kOv0H7tcM3Q50QXAVQ8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Malvinas Argentinas',
        entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Pereyra, Nora',
        trabajadores: 25,
        metros: 4600,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1buhFaulSPd4t3e6Q_yFwPxI171KlvNU&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Malvinas Argentinas',
        entidad: 'Cooperativa de Trabajo Lazos de Trabajo Ltda.',
        supervisorTerritorial: 'Bravo, Pablo',
        responsableCarga: 'Pereyra, Nora',
        trabajadores: 30,
        metros: 7260,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1dIuJ_BM8uzGr-Shs72tHQM8T8OuOL30&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Merlo',
        entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'López, Alejandra',
        trabajadores: 25,
        metros: 3023,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1VKYn2MCDk-T0mxwhMRgtujvM3vocxMM&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Merlo',
        entidad: 'Cooperativa de Trabajo Nuestro Cielo Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'González, Carla',
        trabajadores: 30,
        metros: 5850,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1f_eSjrPtyEJ_vIFxxK6PNyVoUQnjC3Y&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Merlo',
        entidad: 'Cooperativa de Trabajo Nuestro Cielo Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'González, Carla',
        trabajadores: 30,
        metros: 6665,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1nIrTv62UAexj3AS3ajEMpM8EC7zArSg&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Moreno',
        entidad: 'Cooperativa de Trabajo Milagros Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'González, Carla',
        trabajadores: 30,
        metros: 9600,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1oz77jXM-dVvhdThDzasXDE_nZIPjOKY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Pilar',
        entidad: 'Cooperativa de Trabajo Haciendo Patria Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 6150,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=11Ky_DFrBltNcZOwJCRruvFtBEZST62Y&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Pilar',
        entidad: 'Cooperativa de Trabajo Trabajo y Valor Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 20,
        metros: 4500,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1TBZctvsHZYelk0Yy393JIvIohs9oGTw&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Pilar',
        entidad: 'Cooperativa de Trabajo El Alba Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 4500,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1nsHUdAdfjs2A7a1aTmp74ZRD3LSWaP8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Pilar',
        entidad: 'Cooperativa de Trabajo El Alba Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 30,
        metros: 9000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=14LL2Xfh4gDxTpzWZw3o6s9EBlB9r2q8&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Pilar',
        entidad: 'Cooperativa de Trabajo El Alba Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 6630,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Q6wiJ_z_YtubGhzo6Pq1iOuNoXjkvjA&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Toro',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Pilar',
        entidad: 'Cooperativa de Trabajo Honestidad y Verdad Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 5700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1IU8myHYsrW1o0mRmocmlQbYuotSPu-A&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica',
        cuenca: 'Cuenca Río Samborombón',
        municipio: 'Justicia y Soberanía',
        entidad: 'Cooperativa de Trabajo Justicia y Soberanía Ltda.',
        supervisorTerritorial: 'Cáceres, Irene',
        responsableCarga: 'López, Alejandra',
        trabajadores: 30,
        metros: 5900,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1ZkDRGSyt-KDPG2W4jMw6KG6jU8XqKdk&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo',
        cuenca: 'Área de bañados',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo El Ceibo Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 35,
        metros: 6000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Qinff9p-2DX-9ECUBVpPvHunmVCPV7U&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 35,
        metros: 1750,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=17j_mm-VBB53P-Z2RPsl-wunujza8VTo&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 35,
        metros: 1570,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1a_WDbvXocoOE3zcpMHgJZa17VPVpJZQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 35,
        metros: 1850,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1TgvfSACqKfYriVnloZM4K8Cj5lFPcGg&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 30,
        metros: 1000,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Ih6pllU2X1DmYh4h5eZVTvIw3UsO4M4&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 30,
        metros: 1700,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1b11Rc1mDtKXxVldp5B7rsTDEUqlVZ1s&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 30,
        metros: 2400,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1xCPCmKfDZQrC8C1epLGBKSLiTThYgSM&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888',
        cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
        municipio: 'Quilmes',
        entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
        supervisorTerritorial: 'Barrios, Alejandro',
        responsableCarga: 'Farías, Elsa',
        trabajadores: 30,
        metros: 2330,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1hpEhLV4TWNv5AFJ47KLhXUT8nJnODCM&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'San Fernando',
        entidad: 'Cooperativa de Trabajo El Alba Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 2830,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1tmM1IAfQh0H-9nP7VZVVsuZHrMyCL1c&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales en San Isidro',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'San Isidro',
        entidad: 'Cooperativa de Trabajo El Alba Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Hernández, Leo',
        trabajadores: 25,
        metros: 4300,
        href: 'https://www.google.com/maps/d/u/0/embed?mid=19KeNyCqe1lGwQHCXkWX3eQr4okKyZTc&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'San Miguel',
        entidad: 'Cooperativa de Trabajo Futuro Brillante Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 4400,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=17A_ICRevoHroL87s61g4DdUXq0J2ISQ&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'San Miguel',
        entidad: 'Cooperativa de Trabajo Sudamericana Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 3620,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1W6t6Pr5qXlAWlI9e9Y67ESq72Qvu3nY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Los Berros',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'San Miguel',
        entidad: 'Cooperativa de Trabajo Sudamericana Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 4800,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1W6t6Pr5qXlAWlI9e9Y67ESq72Qvu3nY&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'San Miguel',
        entidad: 'Cooperativa de Trabajo Crecer Luchando Ltda.',
        supervisorTerritorial: 'Blanco, Martín',
        responsableCarga: 'Cabrera, Samuel',
        trabajadores: 25,
        metros: 4620,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1AIF6bDpMERMQDunukOlY2oIVHG3nAgA&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo',
        cuenca: 'Cuenca Arroyo Ramallo',
        municipio: 'San Nicolás',
        entidad: 'Cooperativa de Trabajo Liderar Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 10620,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1z1Mo-83ogO-SfYoBDRKeIBSvkt_pNvU&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este',
        cuenca: 'Cuenca Arroyo del Medio',
        municipio: 'San Nicolás',
        entidad: 'Cooperativa de Trabajo Liderar Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 20,
        metros: 6900,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=136CMfukHJuTH-JNsrDZQO-kzhuKms_k&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación',
        cuenca: 'Cuenca Río Salado',
        municipio: 'Tandil',
        entidad: 'Cooperativa de Trabajo La Gloria Ltda.',
        supervisorTerritorial: 'Ávila, Raúl',
        responsableCarga: 'Ávila, Raúl',
        trabajadores: 30,
        metros: 8090,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1SPHaWRw_cA_fl7QhFMnzi21Vm_l7cpI&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Tigre',
        entidad: 'Cooperativa de Trabajo Fuerza Obrera Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 4850,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Mqss6nUvfrfV9kKEPEjqr0Zf22KZS_c&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Claro',
        cuenca: 'Cuenca Río Luján',
        municipio: 'Tigre',
        entidad: 'Cooperativa de Trabajo Trabajo y Valor Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 6050,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1wdO51u76A26baGnhgSxOP50Zu1oxJkg&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista',
        cuenca: 'Cuenca Río Reconquista',
        municipio: 'Tigre',
        entidad: 'Cooperativa de Trabajo Perseverancia Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 3211,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1F6OZDLcSzFPLQl_MVRE8NCu7JoM6PJ0&ehbc=2E312F&noprof=1'
    },	
        
    {	
        obra: 'Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate',
        cuenca: 'Cuenca Arroyo de la Cruz',
        municipio: 'Zárate',
        entidad: 'Cooperativa de Trabajo Fuerza Obrera Ltda.',
        supervisorTerritorial: 'Chávez, Miguel',
        responsableCarga: 'Franco, Matías',
        trabajadores: 25,
        metros: 3940,
        hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1AC-HY2vbDC_566Lun95o4bDzPwJy8aw&ehbc=2E312F&noprof=1'
    },
];
