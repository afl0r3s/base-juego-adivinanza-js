//generar numero al azar entre 1 y 100;
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let boton = document.getElementById('btnComprobar');
let intento = document.getElementById('intento');
let intentos = 0;

//funcion que se ejecuta al hacer click en el boton
function chequearResultado() {
	intentos++;
	intento.textContent = intentos;
	let numeroIngresado = parseInt(numeroEntrada.value);
	if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
		mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100';
		mensaje.style.color = 'black';
		return;
	}

	if (numeroIngresado === numeroAzar) {
		mensaje.textContent = 'Felicitaciones!, has adivinado el numero.. :-)';
		mensaje.style.color = 'green';
		numeroEntrada.disabled = true;
    boton.disabled = true;
	} else if (numeroIngresado < numeroAzar) {
		mensaje.textContent = 'Mas alto!, el numero ingreso es menor al numero a adivinar';
		mensaje.style.color = 'red';
	} else {
		mensaje.textContent = 'Mas bajo!, el numero ingresado es mayor al numero a adivinar';
		mensaje.style.color = 'red';
	}
}
