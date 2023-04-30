const URL_API = 'app/data/tribus.json';

//botones++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const verDatos = document.querySelector('#verDato');
verDatos.addEventListener('click', loadData)//add evento del boton
const limpiarDatos = document.querySelector('#limpiarDato');
limpiarDatos.addEventListener('click', limpiarDato)

function limpiarDato() {
    location.reload();
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loadData() {
    fetch(URL_API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            nuevoHTML(data);
        })

    //deshabilitar el boton de ver lista
    verDatos.disabled = true;
    //----------------------------------
}

function nuevoHTML(myDato) {

    //recorremos el array tribusCampers
    myDato.forEach(element => {

        let datoTribus = document.querySelector('#contenerPrincipal'); //guardamos los datos en el contenedor tribu
    
        const {idTribu, tribu, puntos, campers} = element; //datos de la tribu
        let verDatosTribus = '';
        verDatosTribus += /* html */ `
        <div>
            <h2>TRIBU</h2>
            <div class="contenedorTribu" id="grupoTribu${idTribu}">
                <p>Id: ${idTribu}</p>
                <p>Nombre: ${tribu}</p>
                <p>Puntos: ${puntos}</p>
            </div>
            
            <h3>CAMPERS</h3>
            <div class="contenedorCampers" id="grupoCampers${idTribu}">

                
            </div>
        </div>
        `;
        datoTribus.innerHTML += verDatosTribus; //+
        let datoCampers = document.querySelector(`#grupoCampers${idTribu}`);//almacenamos los datos del camper dentro de un contenedor 
        datoCampers.innerHTML += vercampers(campers);
    });

    function vercampers(datos){

        let verDatosCampers = '';
        datos.forEach(itemCampers => {

            const {id, nombre, edad, ingles, rol, img} = itemCampers;//datos de los campers
            verDatosCampers += /* html */ `
            <div class="targetas">
                <img src="img/${img}" alt="Foto Campers"/>
                <h5>Id: ${id}</h5>
                <h5>Nombre: ${nombre}</h5>
                <h5>Edad: ${edad}</h5>
                <h5>Ingles: ${ingles}</h5>
                <h5>Rol: ${rol}</h5>
            </div>
            `;
        });
        return verDatosCampers;
    }
}
