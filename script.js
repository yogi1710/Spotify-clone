// variables initailaization
console.log('Hello');
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif1 = document.getElementById('gif1');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Summertime Sadness", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Infinity", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Snap", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Animals", filePath: "songs/4.mp3", coverPath: "covers/4.webp"},
    {songName: "People", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "WannaBe Yours", filePath: "songs/6.mp3", coverPath: "covers/6.webp"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        gif1.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        gif1.style.opacity = 0;
    }
}) 

audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        }
    )
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // audioElement.src = 'songs/3.mp3';
        // audioElement.currentTime = 0;
        // audioElement.play();
    })
})