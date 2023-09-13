const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameover = document.querySelector("#gameover")

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    },  500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPostion);

    if (pipePosition <= 120 && pipePosition > 0 && marioPostion < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = '../assets/marioover.png';
        mario.style.transition = ".5s"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        gameover.style.transform= "translateY(0px)"

        clearInterval(loop)

    }

}, 10);

document.addEventListener('keydown' , jump);

gameover.addEventListener("click", ()=>{
    location.reload()
})