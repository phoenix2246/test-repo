const tracks = [
{trackId:"music/Adidas.mp3",title:"Adidas-RussiaVillageBoys"},
{trackId:"music/engmaninny.mp3", title:"EnglishManInNY - David"},
{trackId:"music/TNT.mp3", title:"T.N.T - AC/DC"},
{trackId:"music/PurpleHat.mp3", title:"PurpleHat - SofiTucker"},
{trackId:"music/PYRO.mp3", title:"PYRO - ChesterDane"}

]

const trackTag = document.getElementsByClassName("playlist-container")[0]

const audioTag = document.getElementsByClassName("audioTag")[0]

const durationTag = document.getElementsByClassName("currentAndTotleTime")[0]

const currentProgressTag = document.getElementById("currentProgress")

const prevButtonTag = document.getElementsByClassName("previousButton")[0]

const nextButtonTag = document.getElementsByClassName("nextButton")[0]





prevButtonTag.addEventListener("click",()=>{
    if(currentSongIndex === 0){
        return
    }
    currentSongIndex -= 1
    playSong()
})

const playSong = () =>{
    const prevSong = tracks[currentSongIndex].trackId
    audioTag.src = prevSong
    audioTag.play()
    isPlaying = true
    updatePlayAndPause()
}

nextButtonTag.addEventListener("click",()=>{
    if(currentSongIndex === tracks.length - 1){
        currentSongIndex = 0
       playSong()
        return
    }
    currentSongIndex += 1
    playSong()
})


for(let i = 0 ; i < tracks.length ; i++){
    const newTrack = document.createElement("div")
    newTrack.classList.add("trackItems")
    newTrack.addEventListener("click",()=>{
        currentSongIndex = i
        playSong()
        

    })
    const trackName = (i + 1).toString() +"."+" "+ tracks[i].title
    newTrack.textContent = trackName
    trackTag.append(newTrack)
}

let durationText = "00:00"
let duration = 0
audioTag.addEventListener("loadeddata",()=>{
     duration = Math.floor(audioTag.duration)
  durationText = createDuration(duration)
    
})

const currentProgressBar = (x) =>{
    const progressBarWidth = (500/duration) * x
    
    currentProgressTag.style.width = progressBarWidth.toString() + "px"
}


audioTag.addEventListener("timeupdate",()=>{
    const currentDuration = Math.floor(audioTag.currentTime)
    const currentDurationText = createDuration(currentDuration)
    const timeShown = currentDurationText + " / " + durationText
    durationTag.textContent = timeShown
    currentProgressBar(currentDuration)
})


const createDuration = (time) => {
    const minutes = Math.floor(time/60)
    const seconds = time%60
    const minutesText = minutes < 10 ? "0" + minutes.toString():minutes
    const secondsText = seconds < 10 ? "0" + seconds.toString():seconds
    return minutesText + ":" + secondsText
}

const playButtonTag = document.getElementsByClassName("playButton")[0]
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0]

let currentSongIndex = 0
let isPlaying = false
playButtonTag.addEventListener("click",() => {
    const currentTime = Math.floor(audioTag.currentTime)
    isPlaying = true
    if(currentTime === 0){
    playSong()
}else{
    audioTag.play()
    updatePlayAndPause()
    
}
   
    

})

pauseButtonTag.addEventListener("click",()=>{
    isPlaying = false
    audioTag.pause()
    updatePlayAndPause()
})

const updatePlayAndPause = () =>{
    if(isPlaying){
        playButtonTag.style.display = "none"
        pauseButtonTag.style.display = "inline"
    }else{
        pauseButtonTag.style.display = "none"
        playButtonTag.style.display = "inline"
    }

}




