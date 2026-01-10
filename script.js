
function openM(titulo, descripcion, precio) {
    const modal = document.getElementById('modal');
    const mTitle = document.getElementById('m-title');
    const mDesc = document.getElementById('m-desc');
    const mPrice = document.getElementById('m-price');
    const waLink = document.getElementById('wa-link-modal');

    
    mTitle.innerText = titulo;
    mDesc.innerHTML = descripcion;
    mPrice.innerText = precio;

    
    const telefono = "5491131640600";
    const mensaje = `Hola! Me interesa iniciar el pedido de: ${titulo}.`;
    waLink.href = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    
    modal.style.display = 'flex';
}


function closeM() { 
    document.getElementById('modal').style.display = 'none'; 
}


window.onclick = function(event) { 
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeM(); 
    }
}