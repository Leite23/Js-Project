const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
    lamp.src = '/assets/LampAcss.png';
    
}

function lampOff(){
    lamp.src = '/assets/LampadaInt.png'
}

function lampBroken (){
    lamp.src = '/assets/LampBrk.png'
}
turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff );
lamp.addEventListener( 'mouseover', lampOn );
lamp.addEventListener( 'mouseleave', lampOff );
lamp.addEventListener ('dblclick', lampBroken);

