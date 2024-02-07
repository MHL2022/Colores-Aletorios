// seleccionamos los elementos del dom
const boton = document.querySelector('button');
const textoBoton = document.getElementById('color');

// creamos la función para cambiar los colores
// sistema hexadecimal https://es.wikipedia.org/wiki/Sistema_hexadecimal -> {0,1,2,3,4,5,6,7,8,9,A,B,C,D,F}

function colorAleatorio() {

    let digitos = '0124356789ABCDEF';
    let colorHex = '#'
    for (let i = 0; i < 6; i++) {

        let indiceAleatorio = Math.floor(Math.random() * digitos.length);
        colorHex = colorHex + digitos[indiceAleatorio];
    }
    return colorHex;
}

// escuchamos el evento y lo relacionamos con la función
boton.addEventListener('click', () => {
    let colorAleatorioHex = colorAleatorio();
    //actualizar el texto
    color.textContent = colorAleatorioHex;
    //actualizar el color aleatorio
    document.body.style.background = colorAleatorioHex;
});