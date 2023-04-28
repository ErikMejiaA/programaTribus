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

        //-----------------------------------------------------------------------------------
        let contenedor = document.querySelector('#contenerPrincipal');//contenedor principal
        let contenedorPrinci = /* html */ `
        <div>
            <div id="grupoTribu">

            </div>

            <div class="campers" id="grupoCampers">
            
            </div>
        </div>
        ` 
        contenedor.innerHTML = contenedorPrinci; //+
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        const {idTribu, tribu, puntos, campers} = element; //datos de la tribu

        let datoTribus = document.querySelector('#grupoTribu'); //guardamos los datos en el contenedor tribu
        let verDatosTribus = /* html */ `
        <div>
            <p>Id: ${idTribu}</p>
            <p>Nombre: ${tribu}</p>
            <p>Puntos: ${puntos}</p>
        </div>
        `
        datoTribus.innerHTML = verDatosTribus; //+
               
        campers.forEach(itemCampers => {

            const {id, nombre, edad, ingles, rol, img} = itemCampers;//datos de los campers

            let datoCampers = document.querySelector('#grupoCampers'); //guardamos los datos en el contenedor contenedorCampers
            let verDatosCampers = /* html */ `
            <div class="carts">
                <img src="img/${img}" alt="Foto Campers"/>
                <p>Id: ${id}</p>
                <p>Nombre: ${nombre}</p>
                <p>Edad: ${edad}</p>
                <p>Ingles: ${ingles}</p>
                <p>Rol: ${rol}</p>
            </div>
            `
            datoCampers.innerHTML += verDatosCampers; //+
        });
    });
}

document.querySelector('#verDatos').addEventListener('click', loadData)//add evento del boton