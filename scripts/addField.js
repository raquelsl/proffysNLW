// procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click' , cloneField)

//executaar uma ação
function cloneField() {

   //duplicar os campos, quais campos?
   const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
   
   //pegar os campos dupl, quais?
    const fields = newFieldsContainer.querySelectorAll('input')

   // para cada campo limpar 
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ""
    })
   //colocar na página, onde?

   document.querySelector('#schedule-items').appendChild(newFieldsContainer) 

}