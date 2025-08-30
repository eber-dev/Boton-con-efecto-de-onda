const boton = document.querySelectorAll(".onda") //Usa all ya que se manejera coordenadas dentro del boton y se debe iterar

boton.forEach(e =>{
    e.addEventListener("click" , coordenadas);
})

function coordenadas(m){
    const x = m.pageX; //cuán lejos está el mouse del borde izquierdo de la pantalla.
    const y = m.pageY //cuán lejos está el mouse del borde superior.

    //e.target es el elemento exacto sobre el que hiciste clic.
    //Esto es dónde está el botón
    const buttonTop = m.target.offsetTop; //cuántos píxeles desde arriba está el botón dentro de su contenedor.
    const buttonLeft = m.target.offsetLeft; //lo mismo pero desde la izquierda

    //donde se hizo click dentro del boton
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circulo = document.createElement("span")

    circulo.classList.add("circulo")

    //Posicionamos el círculo exactamente donde hiciste clic dentro del botón.

    circulo.style.top = yInside + "px"
    circulo.style.left = xInside + "px"


    //Agrega ese círculo dentro del botón
    m.target.appendChild(circulo)
    
    setTimeout(()=>circulo.remove(), 500)
}

