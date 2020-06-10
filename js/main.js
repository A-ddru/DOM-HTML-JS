/* hacer que los datos recolectados en el formulario se vean reflejados en el DOM */


var inputCollection = document.querySelectorAll('input');

inputCollection.forEach(element => {
 console.log(element)
 element.addEventListener("keyup", ( event )=> {
     let inputValue = event.target.value
     console.log(inputValue)
 })

})


