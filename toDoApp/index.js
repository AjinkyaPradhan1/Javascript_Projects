const formToDo = document.getElementById("formToDo")
const submitBtn= document.getElementById("submitBtn")

formToDo.addEventListener('submit',(event)=>{

    event.preventDefault();

    const desc  = document.getElementById("desc").value
    const dateStart =document.getElementById("dateStart").value
    const dateEnd = document.getElementById("dateEnd").value
    const selectP = document.getElementById("selectP").value
   
    if(selectP===""){
        alert("PleaseSelect a Category")
        submitBtn.disabled = true
        formToDo.removeEventListener('submit')
    }else{
            const tList = document.getElementById("tList")
            const newRow = document.createElement('tr')

            newRow.innerHTML =
            `<td>${desc}</td>
            <td>${dateStart}</td>
            <td>${dateEnd}</td>
            <td>${selectP}</td>
            `
            tList.appendChild(newRow)
        }
    })
