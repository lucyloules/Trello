function trello() {//al hacer click en 
	
	var principal = document.getElementById("principal"); //contenedor de javascript
	//se oculta el input original
	
	
	//Se crean los elementos
	var btn = document.createElement('button');
	var input = document.createElement('input');
	var textbtn = document.createTextNode('Guardar');//texto del boton

	//atributos
	input.setAttribute('id', 'valor');//agregar atributos al input

	btn.appendChild(textbtn);//el texto guardar es hijo del boton
	container.appendChild(btn);//boton es hijo de container
	container.appendChild(input);//input es hijo de container

	btn.addEventListener('click', function (){//al presionar boton guardar agrego evento
		var textinp = document.getElementById('valor').value; //capturo el texto que hay en el input
		document.getElementById('valor').value = "";//limpiar el input
		var contiene = document.getElementById('contiene'); //llamo al div contiene para pasarle el texto del input

		var parrafo = document.createElement('p');//creo un parrafo
		var textNew = document.createTextNode(textinp);// le paso el texto dedl input al parrafo 

		parrafo.appendChild(textNew);//texto sera hijo de parrafo
		contiene.appendChild(parrafo);//pararfo sera hijo del div contiene


		var addCard = document.createElement('a');//creo el elemento agregar
		addCard.setAttribute('href', '#');
		var textadd= document.createTextNode('añadir tarjeta');//agrego texto a mi nuevo elemento

		addCard.appendChild(textadd);//textadd es hijo de a
		contiene.appendChild(addCard);//addCard es hijo de contiene

		addCard.addEventListener('click', function(){//al presionar agregar tarjeta agrego evento
			var textarea = document.createElement('textarea');//creo un textarea
			textarea.setAttribute('id', 'cuadro');//le doy atributos

			contiene.appendChild(textarea);//textarea es hijo de contiene

			var addCard2 = document.createElement('a');//creo el elemento agregar tarjeta nuevamente
			addCard2.setAttribute('href', '#');
			var textadd2= document.createTextNode('añadir tarjeta');//agrego texto a mi nuevo elemento

			addCard2.appendChild(textadd2);//textadd es hijo de a
			contiene.appendChild(addCard2);//addCard2 es hijo de contiene
		})
	})


}