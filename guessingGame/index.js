let inp = document.getElementById("numInput")
let btnSubmit = document.getElementById("btnSubmit")
let result = document.getElementById("result")
let guess = document.getElementById("guess")

let answer = Math.floor(Math.random()*10)+1
let gNum=0

console.log(answer)
btnSubmit.addEventListener('click',
    ()=>{
        guessAnalysis()
    }
)

function guessAnalysis(){
    if(inp.value<=0 || inp.value>10 || inp.value==NaN){
        result.innerHTML= "Please Enter value betwen 1 to 10"
        gNum++;
        guess.innerHTML= `Guess Count: ${gNum}`
    }else{
        if(inp.value>answer){
            result.innerHTML = "Value higher than the answer"
            gNum++;
            guess.innerHTML= `Guess Count: ${gNum}`
        }
        else if(inp.value<answer){
            result.innerHTML = "Value lower than the answer"
            gNum++;
            guess.innerHTML= `Guess Count: ${gNum}`
        }
        else{
            gNum++
            guess.innerHTML= `Guess Count: ${gNum}`
            result.innerHTML = `Correct Answer` 
            btnSubmit.disabled = true
            setTimeout(
                ()=>{clearContents()},
                5000
            )
        }
    }

    function clearContents(){
        
        guess.innerHTML="Guess Count: 0"
        gNum = 0
        inp.value=""
        let answer = Math.floor(Math.random()*10)+1
    }
    
}



