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
    let datoTribus = document.querySelector('#tribu'); //guardamos los datos en el contenedor tribu
    let datoCampers = document.querySelector('#contenerdorCampers'); //guardamos los datos en el contenedor contenedorCampers

    myDato.forEach(element => {

        const {idTribu, tribu, puntos, campers} = element;

        let verDatosTribus = /* html */ `
        <p>Id: ${idTribu}</p>
        <p>Nombre: ${tribu}</p>
        <p>Puntos: ${puntos}</p>
        `
        datoTribus.innerHTML = verDatosTribus;

        campers.forEach(itemCampers => {

            const {id, nombre, edad, ingles, rol, img} = itemCampers;

            let verDatosCampers = /* html */ `
            <p>Id: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Edad: ${edad}</p>
            <p>Ingles: ${ingles}</p>
            <p>Rol: ${rol}</p>
            <p>Img: ${img}</p>
            `
            datoCampers.innerHTML += verDatosCampers;
        });
    });
    
    
    
    
}

document.querySelector('#verDatos').addEventListener('click', loadData)