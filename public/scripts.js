const imagen = document.getElementById('hero-img');

const images = [
    '/images/me-1-bg.png',
    '/images/me-2-bg.png',
    '/images/me-3-bg.png',
    '/images/me-4-bg.png',
    '/images/me-5-bg.png'
];

let index=0;


function cambiarImagen(){
    imagen.style.opacity='0';
    setTimeout(()=> {
        index = (index + 1) % images.length;
        imagen.src=images[index];

        imagen.style.opacity ='1';

    },1000)

}

setInterval(cambiarImagen,5000);