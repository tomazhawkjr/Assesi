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


function enviarEmail(){

	var email 		= document.getElementById("emailform").value;
	var nome 		= document.getElementById("nome").value;
	var mensagem  	= document.getElementById("mensagem").value;

	

	if(email == "" || nome == "" || mensagem == ""){

		alert("Todos os campos são obrigatórios");

	} else {

		var XMLHttp = generateXMLHttp();
		
		XMLHttp.onreadystatechange = function(){

			if (XMLHttp.readyState == 4){ 
					
					if (XMLHttp.status == 200){
					alert("Email enviado com sucesso, " + XMLHttp.responseText+ "!");
					document.getElementById("mensagem").value = "";
					}			

			} 

		}

		var postSend = "nome=" + nome + "&email=" + email + "&mensagem=" + mensagem;
		XMLHttp.open("POST", "http://www.pilotoauto.com/assesi/php/controlador_email.php", true);
		XMLHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		XMLHttp.send(postSend);

	}


	

}

