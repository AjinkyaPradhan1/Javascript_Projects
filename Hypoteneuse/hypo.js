
var bt1 = document.getElementById('bt1')
var answer = document.getElementById('answer')

function hyp(){
    var base = parseInt(document.getElementById('base').value)
    var perp = parseInt(document.getElementById('perpendicular').value)
    
    if (base<0 || perp<0){
        alert("Please Enter Positive Values")
        return 
    }
    var Sqr = (base*base) + (perp*perp)
    
    
    var hypo = Math.sqrt(Sqr)
    alert("The Hypoteneuse of Triangle: "+hypo)
    
}

