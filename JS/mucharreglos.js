let audio = document.getElementById("audio");
let play_btn = document.getElementById("play");
let pause_btn = document.getElementById("pausar");
let first_img = document.getElementById("imgu")
let imagen = document.getElementById("imga")

play_btn.addEventListener("click" , () =>{
    audio.play();
    animation.classList.toggle('active')
    first_img.classList.toggle('active_none')

    imagen.classList.toogle('rotacion')
});

pause_btn.addEventListener("click" , () => {
    audio.pause();
    animation.classList.toggle('active')
    first_img.classList.toggle('active_none')

    imagen.classList.toogle('rotacion')
});

