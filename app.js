var media = navigator.mediaDevices;

media.enumerateDevices().then(devices =>{
    console.log(devices);
});

let canvas = document.querySelector('#canvas').getContext("2d");
let video = document.querySelector('#video');
let snap = document.querySelector('#snap');

console.log(navigator.mediaDevices.getUserMedia);

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream =>{
        video.srcObject = stream;
        video.play();
    }).catch(err =>{
        document.write("no se puede iniciar camara web");
        console.log(err);
    });
}

snap.addEventListener('click', event =>{
    canvas.drawImage(video, 0,0,640, 480);
});