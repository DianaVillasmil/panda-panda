const urlsOriginal = ["assets/img/panda1.jpg", 
		   "assets/img/panda2.jpg",
		   "assets/img/panda3.jpg",
		   "assets/img/panda4.jpg"];

var urls = urlsOriginal.slice(0);

var imagenes = document.getElementById("imagenes");

var origen = document.getElementById("origen");
var extincion = document.getElementById("extincion");
var restaurar = document.getElementById("restaurar");

var origenCol = document.getElementsByClassName("left")[0];
var extincionCol = document.getElementsByClassName("right")[0];

dibujarImagenes();

origen.addEventListener("click", borrarOrigen);
extincion.addEventListener("click", borrarExtincion);
restaurar.addEventListener("click", restaurarImagenes);

function dibujarImagenes() {

	while (imagenes.hasChildNodes()) {
		imagenes.removeChild(imagenes.lastChild);
	}

	urls.forEach(function(url, i) {
		var div = document.createElement("div");
		var img = document.createElement("img");
		var a = document.createElement("a");
		var aTxt = document.createTextNode("x");

		a.appendChild(aTxt);

		div.appendChild(img);
		div.appendChild(a);

		img.setAttribute("src", url);

		a.setAttribute("href", "#");		

		imagenes.appendChild(div);

		a.addEventListener("click", function(event){
			urls.splice(i,1);
			dibujarImagenes();
		});
		
	});
}

function borrarOrigen(event) {
	mostrarOcultar(origenCol);
}

function borrarExtincion(event) {
	mostrarOcultar(extincionCol);
}

function restaurarImagenes(event) {
	urls = urlsOriginal.slice(0);
	dibujarImagenes();
}

function mostrarOcultar(elemento) {
	elemento.style.display = elemento.style.display === 'none' ? '' : 'none';
}


