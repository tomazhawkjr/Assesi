var visitas = function () {

	var xhr = new XMLHttpRequest();
	var numero;
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			
			numero = xhr.responseXML.getElementsByTagName("contador")[0].innerHTML.toInt + 1;
			xhr.responseXML.getElementsByTagName("contador")[0].innerHTML = numero;
			
			document.getElementById("content").innerHTML = xhr.responseXML.getElementsByTagName("contador")[0].innerHTML;
			
		}
	}
	
	xhr.open('GET', 'http://www.pilotoauto.com/extras/dados.xml', true);
	xhr.send(null);
	
	


}