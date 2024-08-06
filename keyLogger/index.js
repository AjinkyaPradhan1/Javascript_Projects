let startBtn = document.getElementById("startBtn")
let stopBtn = document.getElementById("stopBtn")
let logUpEntry = document.getElementById("logUpEntry")
let logDownEntry = document.getElementById("logDownEntry")

startBtn.addEventListener('click',()=>{
    startBtn.disabled=true
    stopBtn.disabled=false
    document.addEventListener("keyup",keyUp)
    document.addEventListener("keydown",keyDown)
})

stopBtn.addEventListener('click',()=>{
    stopBtn.disabled=true
    startBtn.disabled=false
    document.removeEventListener("keyup",keyUp)
    document.removeEventListener("keydown",keyDown)
    logDownEntry.innerHTML=""
    logUpEntry.innerHTML=""
})

function keyUp(e){
    logUpEntry.textContent= `Key ${e.key} is pressed UP`
    logUpEntry.textContent=`Key is up`
}

function keyDown(e){
    logUpEntry.textContent= `Key ${e.key} is pressed DOWN`
    logDownEntry.textContent=`Key is down`
}