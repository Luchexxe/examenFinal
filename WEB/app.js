
  
  function Titulo(index) {
  
  
    const tarjeta = data[index];
    const tituloDiv = document.getElementById("titulo");
    const tituloHTML = `
        <h2>${tarjeta.tarjeta.toUpperCase()}</h2>
      `;
  
    tituloDiv.innerHTML = tituloHTML;
    const imagenDiv = document.getElementById("imagen");
    const imangeHTML = `
      <img src="${tarjeta.imagen}" alt="${tarjeta.tarjeta}">
      `;
  
    imagenDiv.innerHTML = imangeHTML;
  
    const detalleDiv = document.getElementById("detalle");
    const detalleHTML = ` 
      ${tarjeta.secciones.map(seccion => `
      <div class="textodetalle">
      <div class="textoboton"> 
        <h3>${seccion.nombre}</h3>
        <a href="${seccion.link}" target="_blank">More info..</a>
        </div>
        <p>${seccion.descripcion}</p>
      </div>
    `).join('')}
      `;
  
    detalleDiv.innerHTML = detalleHTML;
  }

  
function ajImg(index){

  const divDetalle = document.getElementById('detalle');
  const anchoDivDetalle = divDetalle.clientWidth;
  const altoDivDetalle = divDetalle.clientHeight;

  console.log('anchoDivDetalle:'+anchoDivDetalle);
  console.log('altoDivDetalle:'+altoDivDetalle);

  const divImagenLogo = document.querySelector('.imagenlogo');

  const anchoDivImagenLogo = divImagenLogo.clientWidth;
  const altoDivImagenLogo = divImagenLogo.clientHeight;

  console.log(anchoDivImagenLogo);
  console.log(altoDivImagenLogo);
  divImagenLogo.style.height = altoDivDetalle + 'px';
}
  
Titulo(1);
  ajImg(1);
  
  
  document.getElementById("boton1").addEventListener("click", () => Titulo(0));
  document.getElementById("boton2").addEventListener("click", () => Titulo(1));
  document.getElementById("boton3").addEventListener("click", () => Titulo(2));
  document.getElementById("boton4").addEventListener("click", () => Titulo(3));
  
  
  document.getElementById("boton1").addEventListener("click", () => ajImg(0));
  document.getElementById("boton2").addEventListener("click", () => ajImg(1));
  document.getElementById("boton3").addEventListener("click", () => ajImg(2));
  document.getElementById("boton4").addEventListener("click", () => ajImg(3));
  
  