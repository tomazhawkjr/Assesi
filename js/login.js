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

	alert('Utilize um navegador mais recente, este não tem suporte
		a tecnologia utilizada');
}

function logar() {

	var matricula 	= document.getElementById("matriculaInput").value;
	var senha 		= document.getElementById("senhaInput").value;
	var result  	= document.getElementById("login");

	var XMLHttp = generateXMLHttp();
	XMLHttp.open("get", "getData.php?matricula=" + matricula + "&senha=" + senha, true);

	XMLHttp.onreadystatechange = function(){

		if (XMLHttp.readyState == 4)
			if (XMLHttp.status == 200){
				result.innerHTML = XMLHttp.responseText;
			} else {
				result.innerHTML = "Um erro ocorreu: " + XMLHttp.statusText;
			}

	};
	XMLHttp.send(null);
}

