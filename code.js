window.onload = function() {
	Swal.fire({
	  title: 'Información importante',
	  text: 'La información presentada en esta página relacionada con nombres de agentes, entidades y cualquier otro dato sensible, fue modificada para no comprometer los datos oficiales',
	  icon: 'info',
	  confirmButtonText: 'Ok'
  });; };

document.getElementById('download-container').onclick = () => {
	Swal.fire({
	  title: 'Fichas de Cauce',
	  text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a un archivo dentro de una carpeta compartida con información detallada de los tramos del convenio seleccionado.',
	  icon: 'info',
	  confirmButtonText: 'Ok'
	});
};

document.getElementById('type-select').addEventListener('change', updateItems);
document.getElementById('item-select').addEventListener('change', updateActiveWork);

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
    
    if (result) {
        document.getElementById('data-water-basin').value = result.cuenca;
        document.getElementById('data-municipality').value = result.municipio;
        document.getElementById('data-entity').value = result.entidad;
        document.getElementById('data-social-movement').value = result.movimientoSocial;
        document.getElementById('data-exp').value = result.expediente;
        document.getElementById('data-reso').value = result.resolucion;
        document.getElementById('data-workers').value = result.trabajadores;
        document.getElementById('data-meters').value = result.metros;
		document.getElementById('iframe-map').src = result.hrefMap;
		document.getElementById('download-container').style.display = 'flex';        
    } else {
        document.getElementById('data-water-basin').value = '';
        document.getElementById('data-municipality').value = '';
        document.getElementById('data-entity').value = '';
        document.getElementById('data-workers').value = '';
        document.getElementById('data-meters').value = '';
        document.getElementById('iframe-map').src = '';
		document.getElementById('download-container').style.display = 'none';
		document.getElementById('download-container').href = '';
    }
}

const obras = [		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Almirante Brown',
		entidad: 'Asociación Civil La Estación Emprendimiento Productivo y Cultura',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-88560027-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-143-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '20',
		metros: '3770',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1g-iT_84k6LdDe-PWtPXssP8BVdoAQbo&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Almirante Brown',
		entidad: 'Asociación Civil La Estación Emprendimiento Productivo y Cultura',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-65683937-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-887-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '20',
		metros: '3000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1WfBheXQy3jyQyv40PA0wn5vykw2ilsc&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Almirante Brown',
		entidad: 'Cooperativa de Trabajo Creciendo Juntos Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-61105174-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-544-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '25',
		metros: '6600',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1e0_x7ldOks-QjAjbqw6Mzm_BrnqcCfA&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Almirante Brown',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-97419780-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-914-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '25',
		metros: '5700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1pmiu2FX_ktL5QUk-Ia-nTXo2Z7rcLp8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Almirante Brown',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-69848716-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-206-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '30',
		metros: '4430',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1d0vMqj-FYT-3f4d1MmlIaIe1ySk-_kE&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente',
		cuenca: 'Cuenca Arroyo Las Conchitas',
		municipio: 'Berazategui',
		entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-99767007-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-132-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '25',
		metros: '7300',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1ehE6W5zIZrb7piWPCtZf6TgIiGx-ivY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente',
		cuenca: 'Cuenca Arroyo Pereyra',
		municipio: 'Berazategui',
		entidad: 'Cooperativa de Trabajo El Progreso Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-29348395-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-857-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '25',
		metros: '6310',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1t7RqMd5GP3Hlu4VjSCzrn5WtiX40C7I&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte',
		cuenca: 'Cuenca Arroyo Jimenez',
		municipio: 'Berazategui',
		entidad: 'Cooperativa de Trabajo El Progreso Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-91437340-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-561-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '25',
		metros: '5800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1hTXIufwxjce_AKlNAlPawe34Dvpsl_A&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente',
		cuenca: 'Área de bañados',
		municipio: 'Berisso',
		entidad: 'Cooperativa de Trabajo El Gorrión Ltda.',
		movimientoSocial: 'FTA',
		expediente: 'EX-2024-25260061-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-429-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '25',
		metros: '4970',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1uB0J_3IAgJ-p2buBscNBihiDOMVwva8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener',
		cuenca: 'Cuenca Río Samborombón',
		municipio: 'Brandsen',
		entidad: 'Cooperativa de Trabajo Distrito Sur Ltda.',
		movimientoSocial: 'Frente Amplio',
		expediente: 'EX-2024-62472150-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-548-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '25',
		metros: '5700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1osLaVEBNnWNyUqCdo3arernes10m7nI&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni',
		cuenca: 'Cuenca Río Samborombón',
		municipio: 'Brandsen',
		entidad: 'Cooperativa de Trabajo Orgullo Local Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-24842493-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-646-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '26',
		metros: '4800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=13kZC_JC0vThSKGZOOBWN2jMwxhrOjjM&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba',
		cuenca: 'Cuenca Río Samborombón',
		municipio: 'Brandsen',
		entidad: 'Cooperativa de Trabajo Orgullo Local Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-54115750-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-547-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '28',
		metros: '3870',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1L0dgqfP1OOYDBMhMXYoLVSaZWrhOgC4&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Campana',
		entidad: 'Cooperativa de Trabajo Nuevos Comienzos Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-86183068-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-286-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '40',
		metros: '5550',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1YxlWr075Bym5cWZJq3SUekgHDGn6CAw&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte',
		cuenca: 'Cuenca Río Salado',
		municipio: 'Chascomús',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-87327432-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-625-NMIYSPGP',
		supervisorTerritorial: 'Ávila, Raúl',
		responsableCarga: 'Ávila, Raúl',
		trabajadores: '25',
		metros: '4700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=11jIoOEKkPoxkGxkfu1O1iGYhtHerKec&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente',
		cuenca: 'Cuenca Río Salado',
		municipio: 'Chascomús',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-60460639-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-869-NMIYSPGP',
		supervisorTerritorial: 'Ávila, Raúl',
		responsableCarga: 'Ávila, Raúl',
		trabajadores: '25',
		metros: '4900',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1qPUNiLpH6C6X0KVYW83UyuduuIfwSLA&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna',
		cuenca: 'Cuenca Río Salado',
		municipio: 'Chascomús',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-52519247-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-421-NMIYSPGP',
		supervisorTerritorial: 'Ávila, Raúl',
		responsableCarga: 'Ávila, Raúl',
		trabajadores: '25',
		metros: '4800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1KPoTnVSklbHCH6S_MQJBWGAo3BtGHyc&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca',
		cuenca: 'Área de bañados',
		municipio: 'Ensenada',
		entidad: 'Cooperativa de Trabajo La Morena Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-39479188-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-712-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '25',
		metros: '6400',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1QGsrgKSfjJHF0Ia3SKTukMI7ky1OeTE&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Escobar',
		entidad: 'Cooperativa de Trabajo Revolución Ltda.',
		movimientoSocial: 'Barrios en movimiento',
		expediente: 'EX-2024-15960043-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-734-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '6750',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1IerT4dg-VAgu3MhyfRiHtRf83vE7ZHE&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Escobar',
		entidad: 'Cooperativa de Trabajo Fuerza Obrera Ltda.',
		movimientoSocial: 'Unión y Soberanía',
		expediente: 'EX-2024-23448943-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-773-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '3800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=15dzWgd9G41cXrd1QCCWwd8H8lpjjw6M&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Garín',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Escobar',
		entidad: 'Cooperativa de Trabajo Nuevos Comienzos Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-52842914-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-285-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '5240',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1G3mXdXkR0gxYN98Y_4Op4kDn4P4Pu9w&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Esteban Echeverría',
		entidad: 'Cooperativa de Trabajo La Morena Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-81600787-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-107-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Toledo, Pablo',
		trabajadores: '25',
		metros: '6385',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Z6rEUVcHJJdC1OtLTg_SjNueN7-kZXk&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Ezeiza',
		entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-16341637-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-656-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '25',
		metros: '5000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1VMwcQs2Nv0bAHCRAsZay1G_e2xxBd9U&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Ezeiza',
		entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-95589305-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-939-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '25',
		metros: '6200',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1rX5I4soE6taZY4SaZwvaHzkHLIu01BY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Ezeiza',
		entidad: 'Cooperativa de Trabajo Nuestra Señora del Luján Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-70022975-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-869-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Gimenez, Luka',
		trabajadores: '25',
		metros: '4700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1aDkWD4FjQpr6aZNve0JBiXvMDViZfCQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas',
		cuenca: 'Cuenca Arroyo Las Conchitas',
		municipio: 'Florencio Varela',
		entidad: 'Cooperativa de Trabajo Eva Duarte Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-51677166-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-176-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '20',
		metros: '6000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1pk-rjaF9pRs2Xf7Z9QaHv7244gHZAx4&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Juan',
		cuenca: 'Cuenca Arroyo Jimenez',
		municipio: 'Florencio Varela',
		entidad: 'Cooperativa de Trabajo Eva Duarte Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-25010037-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-281-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Rivero, Ismael',
		trabajadores: '20',
		metros: '3000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1UTDqF4osx2W48X7CN4DVw7a8LXskziI&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf',
		cuenca: 'Cuenca de los Arroyos La Tapera, Santa Elena, Seco',
		municipio: 'General Pueyrredón',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-65168115-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-334-NMIYSPGP',
		supervisorTerritorial: 'Ávila, Raúl',
		responsableCarga: 'Ávila, Raúl',
		trabajadores: '25',
		metros: '3600',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1pNlLqdkc5lvL16KPnAmGYlIdIqkRSdQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes',
		cuenca: 'Cuenca de los Arroyos Lobería y Corrientes',
		municipio: 'General Pueyrredón',
		entidad: 'Cooperativa de Trabajo Nuevas Fronteras Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-52828879-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-411-NMIYSPGP',
		supervisorTerritorial: 'Ávila, Raúl',
		responsableCarga: 'Ávila, Raúl',
		trabajadores: '30',
		metros: '7450',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1tdk8RNC6VSCKspA9hW6N8SARGRFyAfQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General Rodríguez',
		entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-55194142-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-726-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Toledo, Pablo',
		trabajadores: '25',
		metros: '5920',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1akg1fx61sghlDenviDe64gJUBqMblug&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General Rodríguez',
		entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-89326198-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-915-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Blanco, Samuel',
		trabajadores: '25',
		metros: '4830',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Pwqtg-Da-L3Wq2kEJKL63Tt1eGGGRXQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General Rodríguez',
		entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-37317852-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-119-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Blanco, Samuel',
		trabajadores: '25',
		metros: '6525',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Ij5U18px3OakN_esHdSez7cbVLcOGH0&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General Rodríguez',
		entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-26531857-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-422-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Blanco, Samuel',
		trabajadores: '25',
		metros: '7500',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1NXF7E54gnJ08B4bIc3PJtK0RvlZca0c&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de la Cañada Álvarez',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General Rodríguez',
		entidad: 'Cooperativa de Trabajo Las Golondrinas Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-67703303-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-157-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Blanco, Samuel',
		trabajadores: '25',
		metros: '4400',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1LyKd2uRkFObORWnNp8Xubhgfi3t_8Nw&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General Rodríguez',
		entidad: 'Cooperativa de Trabajo Las Golondrinas Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-40138333-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-504-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Blanco, Samuel',
		trabajadores: '25',
		metros: '5780',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1MavETonXty3-qunf2egJ_k4sBlyKfZM&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General San Martín',
		entidad: 'Cooperativa de Trabajo 25 de Mayo Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-13047139-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-512-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '3130',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1iSnB6RWpqxuxeNjNj4oN7LHYkHG7vcI&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'General San Martín',
		entidad: 'Cooperativa de Trabajo Revolución Ltda.',
		movimientoSocial: 'Barrios en movimiento',
		expediente: 'EX-2024-56941378-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-902-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '3880',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=18KE5HqIDbjEozoiaW_Md8wz9LrWnaoc&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Soto',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Hurlingham',
		entidad: 'Cooperativa de Trabajo El Gorrión Ltda.',
		movimientoSocial: 'FTA',
		expediente: 'EX-2024-98710038-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-699-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'González, Carla',
		trabajadores: '25',
		metros: '5800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1P7i2ELJU3A8T_KjBMN40fvZTUoiADE8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Pinazo',
		cuenca: 'Cuenca Río Luján',
		municipio: 'José C. Paz',
		entidad: 'Cooperativa de Trabajo Perseverancia Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-16812764-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-351-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '4160',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1JWY5qFDqxr4ybgRIB1BbHrpe6FIScco&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui',
		cuenca: 'Cuenca Río Luján',
		municipio: 'José C. Paz',
		entidad: 'Cooperativa de Trabajo Sueños Compartidos Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-49325944-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-275-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '5380',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1wYWDNIHfCZKopu426KgaccQS7kiCbmY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá',
		cuenca: 'Cuenca Río Luján',
		municipio: 'José C. Paz',
		entidad: 'Cooperativa de Trabajo Sueños Compartidos Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-80524569-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-518-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '5700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1F1sMMx7Qyt4vO7QRKfGmrvNNJjH2_-E&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'La Matanza',
		entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
		movimientoSocial: 'Barrios en movimiento',
		expediente: 'EX-2024-49799409-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-949-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Teresa Colman',
		trabajadores: '32',
		metros: '7280',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1OWuWbSazSY8MFnlAXj6AsSIFsF3hUBQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'La Matanza',
		entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
		movimientoSocial: 'Barrios en movimiento',
		expediente: 'EX-2024-27435520-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-871-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Teresa Colman',
		trabajadores: '32',
		metros: '6950',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1dzTSdqR-niDoaRtMEia1W8ChXZnUrOQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Dupi',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'La Matanza',
		entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-34118146-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-898-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Teresa Colman',
		trabajadores: '35',
		metros: '2450',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1ltjxaLd_iXOBuMr4b8Y6qtf2-jbw1XY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'La Matanza',
		entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-78373737-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-558-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Teresa Colman',
		trabajadores: '25',
		metros: '3960',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1u1C0rAcznAxqE_jimnF0-0IEO9Z7U3U&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'La Matanza',
		entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-84708075-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-473-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Teresa Colman',
		trabajadores: '25',
		metros: '3400',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1F1cymQLMq6BRSLytE8ZZex3nTWimaik&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'La Matanza',
		entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-32373714-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-309-NMIYSPGP',
		supervisorTerritorial: 'Pereyra, Nora',
		responsableCarga: 'Teresa Colman',
		trabajadores: '25',
		metros: '4865',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=14hsyqXO5ZsU9e2SRrlA9cj_8Y9YIhnc&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado',
		cuenca: 'Área de bañados',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Renovación Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-29173637-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-592-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '7000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1bQ8bJboNaDi--WrpqUGPrbK9vGHv0NY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486',
		cuenca: 'Cuenca Arroyos Rodríguez y Don Carlos',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Renovación Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-18553208-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-199-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '4660',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1SGgekCZ5USp2CjVEBB4ihaj_d0Dwj6Y&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval',
		cuenca: 'Cuenca Arroyo Pereyra',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Renovación Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-98109688-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-304-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '4800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1wSN6hA0hQJnVB3vhngjFqR3YjsHRtsE&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet',
		cuenca: 'Cuenca Arroyo El Gato',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Esperanza viva Ltda.',
		movimientoSocial: 'FTA',
		expediente: 'EX-2024-76709938-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-757-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '7100',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=194pv0L_akEFi1bUJ31SW8E9N05xuzNs&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos',
		cuenca: 'Cuenca Arroyo El Gato',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Esperanza viva Ltda.',
		movimientoSocial: 'FTA',
		expediente: 'EX-2024-37716310-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-936-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '30',
		metros: '9000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1v-G9lw8NogCvvk2fxTZhJyKcmiuU1lo&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato',
		cuenca: 'Cuenca Arroyo El Gato',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Esperanza viva Ltda.',
		movimientoSocial: 'FTA',
		expediente: 'EX-2024-43383128-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-652-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '5000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=199fEpWR1mdQ3tikXNXX3PCUs1BoY_N4&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente',
		cuenca: 'Cuenca Arroyo El Gato',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Manos Creativa Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-35184353-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-706-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '4245',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1xvtCEs1BAwitxyBYD6jYq0GaPqy6drs&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval',
		cuenca: 'Cuenca Arroyos Martín y Carnaval',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Fuerza Nacional Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-24444227-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-761-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '10600',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=18j-khS5Gq3xGSDmf_MCC5LSUB4XdWPs&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes',
		cuenca: 'Cuenca Arroyo El Gato',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Fuerza Nacional Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-85875582-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-513-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '7640',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1FlG6XP3ANuS1nzgA1IwIrrDKalOHXGQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez',
		cuenca: 'Cuenca Arroyos Rodríguez y Don Carlos',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Pueblo Mío Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-36512760-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-709-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '7640',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1SMkQIHlbTMWx0x9-C7k8PEyBgTrsmI8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio',
		cuenca: 'Cuenca Arroyo Maldonado',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Pueblo Mío Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-65291946-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-390-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '11100',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1GWLll204LrN0mLlg8RpbXqcC18mQIX4&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3',
		cuenca: 'Cuenca Arroyo El Gato',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Dignidad y Justicia Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-53012019-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-365-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '10300',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1X-KEL4F4ob2L5xXtzUPhE3iFBpk9SIM&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente',
		cuenca: 'Cuenca Arroyos Martín y Carnaval',
		municipio: 'La Plata',
		entidad: 'Cooperativa de Trabajo Nuevos Comienzos Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-98256848-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-810-NMIYSPGP',
		supervisorTerritorial: 'López, Francisco',
		responsableCarga: 'Moyano, Matías',
		trabajadores: '25',
		metros: '8500',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1lGP2A--ZAVAH5qan3NQ9PxFl7fceL7M&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Lomas de Zamora',
		entidad: 'Cooperativa de Trabajo Independencia Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-61791414-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-735-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'López, Alejandra',
		trabajadores: '25',
		metros: '1770',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1xOZ1-a9GvWLNc-4xO5bBz4xIuZM50-c&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo del Rey',
		cuenca: 'Cuenca Río Matanza - Riachuelo',
		municipio: 'Lomas de Zamora',
		entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
		movimientoSocial: 'Barrios en movimiento',
		expediente: 'EX-2024-87537399-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-863-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'López, Alejandra',
		trabajadores: '32',
		metros: '4360',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1c6Cpv4DmWZ38vNy_rjpWlGrTsLXgOJ0&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Malvinas Argentinas',
		entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-53982391-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-174-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Toledo, Pablo',
		trabajadores: '25',
		metros: '6500',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=18kTtVKsKrd36kOv0H7tcM3Q50QXAVQ8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Malvinas Argentinas',
		entidad: 'Cooperativa de Trabajo Los Montes Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-58585592-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-805-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Toledo, Pablo',
		trabajadores: '25',
		metros: '4600',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1buhFaulSPd4t3e6Q_yFwPxI171KlvNU&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Malvinas Argentinas',
		entidad: 'Cooperativa de Trabajo Lazos de Trabajo Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-40535828-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-217-NMIYSPGP',
		supervisorTerritorial: 'Bravo, Pablo',
		responsableCarga: 'Toledo, Pablo',
		trabajadores: '30',
		metros: '7260',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1dIuJ_BM8uzGr-Shs72tHQM8T8OuOL30&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Merlo',
		entidad: 'Cooperativa de Trabajo Manos Unidas Ltda.',
		movimientoSocial: 'Barrios en movimiento',
		expediente: 'EX-2024-49217830-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-159-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'López, Alejandra',
		trabajadores: '25',
		metros: '3023',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1VKYn2MCDk-T0mxwhMRgtujvM3vocxMM&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Merlo',
		entidad: 'Cooperativa de Trabajo Nuestro Cielo Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-21901946-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-855-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'González, Carla',
		trabajadores: '30',
		metros: '5850',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1f_eSjrPtyEJ_vIFxxK6PNyVoUQnjC3Y&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Merlo',
		entidad: 'Cooperativa de Trabajo Nuestro Cielo Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-20840420-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-943-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'González, Carla',
		trabajadores: '30',
		metros: '6665',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1nIrTv62UAexj3AS3ajEMpM8EC7zArSg&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Moreno',
		entidad: 'Cooperativa de Trabajo Milagros Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-26170675-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-473-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'González, Carla',
		trabajadores: '30',
		metros: '9600',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1oz77jXM-dVvhdThDzasXDE_nZIPjOKY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Pilar',
		entidad: 'Cooperativa de Trabajo Haciendo Patria Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-31047074-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-537-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '6150',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=11Ky_DFrBltNcZOwJCRruvFtBEZST62Y&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Pilar',
		entidad: 'Cooperativa de Trabajo Trabajo y Valor Ltda.',
		movimientoSocial: 'Unión y Soberanía',
		expediente: 'EX-2024-19654161-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-687-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '20',
		metros: '4500',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1TBZctvsHZYelk0Yy393JIvIohs9oGTw&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Pilar',
		entidad: 'Cooperativa de Trabajo El Alba Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-86087362-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-493-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '4500',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1nsHUdAdfjs2A7a1aTmp74ZRD3LSWaP8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Pilar',
		entidad: 'Cooperativa de Trabajo El Alba Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-31010134-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-791-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '30',
		metros: '9000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=14LL2Xfh4gDxTpzWZw3o6s9EBlB9r2q8&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Pilar',
		entidad: 'Cooperativa de Trabajo El Alba Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-10674228-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-809-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '6630',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Q6wiJ_z_YtubGhzo6Pq1iOuNoXjkvjA&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Toro',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Pilar',
		entidad: 'Cooperativa de Trabajo Honestidad y Verdad Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-91271793-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-772-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '5700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1IU8myHYsrW1o0mRmocmlQbYuotSPu-A&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica',
		cuenca: 'Cuenca Río Samborombón',
		municipio: 'Presidente Perón',
		entidad: 'Cooperativa de Trabajo Justicia y Soberanía Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-51789332-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-830-NMIYSPGP',
		supervisorTerritorial: 'Cáceres, Irene',
		responsableCarga: 'López, Alejandra',
		trabajadores: '30',
		metros: '5900',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1ZkDRGSyt-KDPG2W4jMw6KG6jU8XqKdk&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo',
		cuenca: 'Área de bañados',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo El Ceibo Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-38014159-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-633-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '35',
		metros: '6000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Qinff9p-2DX-9ECUBVpPvHunmVCPV7U&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-48252047-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-788-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '35',
		metros: '1750',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=17j_mm-VBB53P-Z2RPsl-wunujza8VTo&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-91511807-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-266-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '35',
		metros: '1570',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1a_WDbvXocoOE3zcpMHgJZa17VPVpJZQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo Solidaridad Activa Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-16013730-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-227-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '35',
		metros: '1850',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1TgvfSACqKfYriVnloZM4K8Cj5lFPcGg&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-32211060-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-824-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '30',
		metros: '1000',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Ih6pllU2X1DmYh4h5eZVTvIw3UsO4M4&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-84604613-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-617-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '30',
		metros: '1700',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1b11Rc1mDtKXxVldp5B7rsTDEUqlVZ1s&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo Unión Solidaria Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-86458216-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-650-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '30',
		metros: '2400',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1xCPCmKfDZQrC8C1epLGBKSLiTThYgSM&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888',
		cuenca: 'Cuenca Arroyo San Francisco - Las Piedras',
		municipio: 'Quilmes',
		entidad: 'Cooperativa de Trabajo El Cóndor Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-93419408-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-714-NMIYSPGP',
		supervisorTerritorial: 'Barrios, Alejandro',
		responsableCarga: 'Farías, Elsa',
		trabajadores: '30',
		metros: '2330',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1hpEhLV4TWNv5AFJ47KLhXUT8nJnODCM&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'San Fernando',
		entidad: 'Cooperativa de Trabajo El Alba Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-28690144-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-857-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '2830',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1tmM1IAfQh0H-9nP7VZVVsuZHrMyCL1c&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales en San Isidro',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'San Isidro',
		entidad: 'Cooperativa de Trabajo El Alba Ltda.',
		movimientoSocial: 'CNP',
		expediente: 'EX-2024-69999274-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-608-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Hernández, Leo',
		trabajadores: '25',
		metros: '4300',
		href: 'https://www.google.com/maps/d/u/0/embed?mid=19KeNyCqe1lGwQHCXkWX3eQr4okKyZTc&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'San Miguel',
		entidad: 'Cooperativa de Trabajo Futuro Brillante Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-43447659-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-868-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '4400',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=17A_ICRevoHroL87s61g4DdUXq0J2ISQ&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'San Miguel',
		entidad: 'Cooperativa de Trabajo Sudamericana Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-97984795-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-486-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '3620',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1W6t6Pr5qXlAWlI9e9Y67ESq72Qvu3nY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Los Berros',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'San Miguel',
		entidad: 'Cooperativa de Trabajo Sudamericana Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-43439102-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-740-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '4800',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1W6t6Pr5qXlAWlI9e9Y67ESq72Qvu3nY&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'San Miguel',
		entidad: 'Cooperativa de Trabajo Crecer Luchando Ltda.',
		movimientoSocial: 'Sin afiliación',
		expediente: 'EX-2024-77544882-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-722-NMIYSPGP',
		supervisorTerritorial: 'Blanco, Martín',
		responsableCarga: 'Cabrera, Samuel',
		trabajadores: '25',
		metros: '4620',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1AIF6bDpMERMQDunukOlY2oIVHG3nAgA&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo',
		cuenca: 'Cuenca Arroyo Ramallo',
		municipio: 'San Nicolás',
		entidad: 'Cooperativa de Trabajo Liderar Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-33873918-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-146-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '10620',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1z1Mo-83ogO-SfYoBDRKeIBSvkt_pNvU&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este',
		cuenca: 'Cuenca Arroyo del Medio',
		municipio: 'San Nicolás',
		entidad: 'Cooperativa de Trabajo Liderar Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-12890639-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-526-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '20',
		metros: '6900',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=136CMfukHJuTH-JNsrDZQO-kzhuKms_k&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación',
		cuenca: 'Cuenca Río Salado',
		municipio: 'Tandil',
		entidad: 'Cooperativa de Trabajo La Gloria Ltda.',
		movimientoSocial: 'Mov. Just. Soc.',
		expediente: 'EX-2024-71533916-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-669-NMIYSPGP',
		supervisorTerritorial: 'Ávila, Raúl',
		responsableCarga: 'Ávila, Raúl',
		trabajadores: '30',
		metros: '8090',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1SPHaWRw_cA_fl7QhFMnzi21Vm_l7cpI&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Tigre',
		entidad: 'Cooperativa de Trabajo Fuerza Obrera Ltda.',
		movimientoSocial: 'Unión y Soberanía',
		expediente: 'EX-2024-42224971-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-537-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '4850',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1Mqss6nUvfrfV9kKEPEjqr0Zf22KZS_c&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Arroyo Claro',
		cuenca: 'Cuenca Río Luján',
		municipio: 'Tigre',
		entidad: 'Cooperativa de Trabajo Trabajo y Valor Ltda.',
		movimientoSocial: 'Unión y Soberanía',
		expediente: 'EX-2024-22147155-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-103-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '6050',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1wdO51u76A26baGnhgSxOP50Zu1oxJkg&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista',
		cuenca: 'Cuenca Río Reconquista',
		municipio: 'Tigre',
		entidad: 'Cooperativa de Trabajo Perseverancia Ltda.',
		movimientoSocial: 'UCBA',
		expediente: 'EX-2024-76980749-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-439-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '3211',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1F6OZDLcSzFPLQl_MVRE8NCu7JoM6PJ0&ehbc=2E312F&noprof=1',
		
	},	
		
	{	
		obra: 'Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate',
		cuenca: 'Cuenca Arroyo de la Cruz',
		municipio: 'Zárate',
		entidad: 'Cooperativa de Trabajo Fuerza Obrera Ltda.',
		movimientoSocial: 'Unión y Soberanía',
		expediente: 'EX-2024-11832982-GDEBA-DFNEMIYSP',
		resolucion: 'RESO-2024-886-NMIYSPGP',
		supervisorTerritorial: 'Chávez, Miguel',
		responsableCarga: 'Franco, Matías',
		trabajadores: '25',
		metros: '3940',
		hrefMap: 'https://www.google.com/maps/d/u/0/embed?mid=1AC-HY2vbDC_566Lun95o4bDzPwJy8aw&ehbc=2E312F&noprof=1',
		
	},	
];
