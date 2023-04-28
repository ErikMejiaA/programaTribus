const URL_API = 'app/data/tribus.json';

function loadData() {
    fetch(URL_API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            nuevoHTML(data);
        })
}

function nuevoHTML(myDato) {

    //recorremos el array tribusCampers
    myDato.forEach(element => {

        let datoTribus = document.querySelector('#contenerPrincipal'); //guardamos los datos en el contenedor tribu
    
        const {idTribu, tribu, puntos, campers} = element; //datos de la tribu
        let verDatosTribus = '';
        verDatosTribus += /* html */ `
        <div class="grupoTribu" id="grupoTribu${idTribu}">
            <p>Id: ${idTribu}</p>
            <p>Nombre: ${tribu}</p>
            <p>Puntos: ${puntos}</p>
        </div>
        
        <div class="campers" id="grupoCampers${idTribu}">
            
        </div>
        `
        datoTribus.innerHTML += verDatosTribus; //+
        
        let datoCampers = document.querySelector(`#grupoCampers${idTribu}`);//almacenamos los datos del camper dentro de un contenedor 
        datoCampers.innerHTML += vercampers(campers);
        
    });

    function vercampers(datos){

        let verDatosCampers = '';
        datos.forEach(itemCampers => {

            const {id, nombre, edad, ingles, rol, img} = itemCampers;//datos de los campers
            verDatosCampers += /* html */ `
            <div class="carts">
                <img src="img/${img}" alt="Foto Campers"/>
                <p>Id: ${id}</p>
                <p>Nombre: ${nombre}</p>
                <p>Edad: ${edad}</p>
                <p>Ingles: ${ingles}</p>
                <p>Rol: ${rol}</p>
            </div>
            `
        });
        return verDatosCampers;
    }
}
document.querySelector('#verDatos').addEventListener('click', loadData)//add evento del boton
