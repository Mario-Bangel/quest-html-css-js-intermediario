const enviar = document.getElementById('enviar')
const campos = document.querySelectorAll('.campo')

enviar.addEventListener("click",  function(event) {

    event.preventDefault()

    campos.forEach(function (item) {
        if (item.value === "") {
            item.classList.add("erro")
            item.nextElementSibling.classList.add("erro")
            item.classList.remove("certo")
        } else {
            item.classList.remove("erro")
            item.nextElementSibling.classList.remove("erro")
            item.classList.add("certo")   
        }
    })
})
