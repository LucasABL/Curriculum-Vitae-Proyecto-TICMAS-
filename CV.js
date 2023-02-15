var navbar_titulo = document.getElementById ('navbar_titulo')
var navbar_informacion = document.getElementById ('navbar_informacion')
var navbar_portafolio = document.getElementById ('navbar_portafolio')
var perfil = document.getElementById ('perfil')

var img_ampliada = document.getElementById ('imagen_ampliada')
document.getElementById('img.portfolio1').addEventListener('click', function () {
  img_ampliada.innerHTML = '<img class="img-thumbnail img-fluid" src="https://img.freepik.com/foto-gratis/impresionantes-vistas-parque-nacional-noruego-rio-fiordos-dia-luminoso_613910-17487.jpg?size=626&ext=jpg&ga=GA1.2.770147115.1675820542&semt=ais">';
})

var img_ampliada = document.getElementById('imagen_ampliada')
document.getElementById('img.portfolio2').addEventListener('click', function () {
  img_ampliada.innerHTML = '<img class="img-thumbnail img-fluid" src="https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?size=626&ext=jpg&ga=GA1.2.770147115.1675820542&semt=ais">';
})

var img_ampliada = document.getElementById('imagen_ampliada')
document.getElementById('img.portfolio3').addEventListener('click', function () {
  img_ampliada.innerHTML = '<img class="img-thumbnail img-fluid" src="https://img.freepik.com/foto-gratis/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg?size=626&ext=jpg&ga=GA1.2.770147115.1675820542&semt=ais">';
})

window.addEventListener('resize', function() { 
  var ancho = window.innerWidth;
  if (ancho <= 500) {
   navbar_titulo.textContent = 'CV';
   navbar_informacion.textContent = 'Info';
   navbar_portafolio.textContent = 'Port';
   
   
  }
  if (ancho > 500) {
    navbar_titulo.textContent = 'Curriculum Vitae';
    navbar_informacion.textContent = 'Informacion';
    navbar_portafolio.textContent = 'Portafolio';  
  }
});


/** 
 if (ancho <= 760) {
    perfil.className ='col-12';
  }
  if (ancho <= 760) {
    perfil.className ='col-12';
  } 
window.addEventListener('resize', function() {
  var ancho = window.innerWidth;
  if (ancho <= 780) {
    datos_perfil.setAttribute ('class','col-12')
  }
  if (ancho > 780) {
    datos_perfil.setAttribute ('class','col-3')
  }
});
*/
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Gracias ;)', 'success')
  })
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

