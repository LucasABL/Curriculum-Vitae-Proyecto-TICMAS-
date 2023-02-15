/** Galeria **/
var navbar_titulo = document.getElementById ('navbar_titulo')
var navbar_informacion = document.getElementById ('navbar_informacion')
var navbar_portafolio = document.getElementById ('navbar_portafolio')
var perfil = document.getElementById ('perfil')

var img_ampliada = document.getElementById ('imagen_ampliada')
document.getElementById('img.portfolio1').addEventListener('click', function () {
  img_ampliada.innerHTML = '<img class="img-thumbnail img-fluid" data-aos="fade-right" src="https://img.freepik.com/foto-gratis/impresionantes-vistas-parque-nacional-noruego-rio-fiordos-dia-luminoso_613910-17487.jpg?size=626&ext=jpg&ga=GA1.2.770147115.1675820542&semt=ais">';
})

var img_ampliada = document.getElementById('imagen_ampliada')
document.getElementById('img.portfolio2').addEventListener('click', function () {
  img_ampliada.innerHTML = '<img class="img-thumbnail img-fluid" data-aos="fade-right" src="https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?size=626&ext=jpg&ga=GA1.2.770147115.1675820542&semt=ais">';
})

var img_ampliada = document.getElementById('imagen_ampliada')
document.getElementById('img.portfolio3').addEventListener('click', function () {
  img_ampliada.innerHTML = '<img class="img-thumbnail img-fluid" data-aos="fade-right" src="https://img.freepik.com/foto-gratis/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg?size=626&ext=jpg&ga=GA1.2.770147115.1675820542&semt=ais">';
})

/** Cambio en el Navbar (Mejora su aspecto en pantallas pequeñas) **/
window.addEventListener('resize', function() { 
  var ancho = window.innerWidth;
  if (ancho <= 510) {
   navbar_titulo.textContent = 'CV';
   navbar_informacion.textContent = 'Info';
   navbar_portafolio.textContent = 'Port';
      
  }
  if (ancho > 510) {
    navbar_titulo.textContent = 'Curriculum Vitae';
    navbar_informacion.textContent = 'Informacion';
    navbar_portafolio.textContent = 'Portafolio';  
  }
});

/** Boton Primario **/
const alerta= document.getElementById('placeholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alerta.append(wrapper)
}

/** Boton Secundario **/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const alertTrigger = document.getElementById('alerta')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Gracias ;)', 'success')
  })
}



