var xhr = new XMLHttpRequest();
var resultado = null;

xhr.open('GET', 'https://www.omdbapi.com/swagger.json');
xhr.send();

const lista = document.getElementById("lista")
let item;


xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        resultado = JSON.parse(xhr.response);

        console.log(resultado);
    }


}