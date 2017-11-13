/*Se carga toda la pagina primero y luego se ejecuta el js*/
window.onload = function() {
    
        /*declaro las variables globales*/
        var principal = document.getElementById('principal');
             
        /*Se crea el formulario al hacer click */
        listName.onclick = function() {
            /* Se crean los elementos */
            var form1 = document.createElement('form');
            var text = document.createElement('textarea');
            var btnGuardar = document.createElement('button');
            var btnX = document.createElement("button");
            /* Se crean los nodos texto */
            var ndGuardar = document.createTextNode('Guardar');
            var ndX = document.createTextNode('X');

            /*agregamos las clases de los elementos creados */
            form.classList.add('formClass');
            text.classList.add('textClass');
            text.setAttribute("placeholder", "Añadir una lista...");
            btnGuardar.classList.add('botonGuardarClass');
            btnX.classList.add("x-btn","class","fa","fa-times");

            /* Se Appendian los elementos */
            btnGuardar.appendChild(ndGuardar);
            form1.appendChild(text);
            form1.appendChild(btnGuardar);
            form1.appendChild(btnX);
            section.removeChild(principal);
            section.appendChild(form1);
              
            /*focus en el input*/
            document.getElementsByClassName('textClass')[0].focus();
            /*agregar lista y creo nuevo evento*/
            /* listName.onclick = function() */
            btnGuardar.addEventListener('click',function(){

            
            };
        };// fin listName.onclick = function()
} //fin