let boton = document.querySelectorAll('.addCart');
let cuadro = document.querySelector('#addedAlert');
let texto = document.getElementById('alertText');
boton.forEach(boton =>{
boton.addEventListener('click', evento=>{
        let id = boton.getAttribute('producto-id');
        cuadro.classList.add('show'); 
        texto.textContent = `Se ha añadido ${id} al carrito.`;

        setTimeout(() => {
            cuadro.classList.remove('show'); 
        }, 5000); 
    })

})
function cantidadDeProdcutos(){
    
}