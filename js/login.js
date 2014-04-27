function generateXMLHttp() {

	if (typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}
	else{	
		if (window.ActiveXObject){
			var versions = ["MSXML2.XMLHttp.5.0", 
			"MSXML2.XMLHttp.4.0", 
			"MSXML2.XMLHttp.3.0",
			"MSXML2.XMLHttp", 
			"Microsoft.XMLHttp"
			];
		}
	}

	for (var i=0; i < versions.length; i++){
		try{
			return new ActiveXObject(versions[i]);
		}catch(e){}
	}

	alert("Utilize um navegador mais recente, este não tem suporte a tecnologia utilizada");
}


function logar(){

	var matricula 	= document.getElementById("matriculaInput").value;
	var senha 		= document.getElementById("senhaInput").value;
	var result  	= document.getElementById("login");
	var direitos	= document.getElementById("direitos");


	if(matricula == "" || senha == ""){

		result.innerHTML = "<p>Preencha login e senha</p> <a href='arearestrita.html'>Voltar</a>";

	} else {

		var XMLHttp = generateXMLHttp();
		
		XMLHttp.onreadystatechange = function(){

			if (XMLHttp.readyState == 4){ 

				if (XMLHttp.status == 200){

					result.style.width = "600px";
					direitos.style.display = "none";
					result.innerHTML = XMLHttp.responseText;
					result.setAttribute("id","listaarquivos");

				} else {

					if(XMLHttp.statusText == "Not Found")
						result.innerHTML = "<p>Você não possui arquivos cadastrados</p> <a href='arearestrita.html'>Voltar</a>";
				}

			} else {

				result.innerHTML = "<p>Carregando...</p>";

			}

		}

		XMLHttp.open("GET", "http://www.pilotoauto.com/assesi/php/controlador_login.php?login="+matricula+"&senha="+senha, true);
		XMLHttp.send(null);

	}


	

}

