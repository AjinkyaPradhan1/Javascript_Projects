var bt1 = document.getElementById('button');
var form = document.querySelector('.kbc');
var output = document.getElementById('output');

const ans = ["japan","rome","arg","ind","russia"];

function checkAns(){
    let score = 0 ;
    let index = 0 ;

    const formResult = new FormData(form);

    for(let value of formResult.values()){
        if(value === ans[index]){
            score += 1;
        }
        index += 1;
    }

    output.innerText = `Result ${score} out of 5`;
    alert(`Your Score is ${score} out of 5`);

}



