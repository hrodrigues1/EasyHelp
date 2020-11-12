document.querySelector("#add-time") //set botão
.addEventListener("click",cloneField) // listener botão

function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //busca campo


    const fields = newFieldContainer.querySelectorAll("input")


    fields.forEach(function(field) {

        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}
