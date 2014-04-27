<?php

class gerenciadorArquivos{


	public function imprimeDiretorio($caminho, $matricula){

		$resposta;	
		
		if($pastas = scandir($caminho)){
		
			foreach ($pastas as $pasta) {

					if(is_dir($caminho.$pasta)){

						if($pasta!="." and $pasta!=".."){

							$resposta.="<h3>".$pasta."</h3>";
							
							if($arquivos = scandir($caminho.$pasta)){

								foreach ($arquivos as $arquivo) {									

									if($arquivo!="." and $arquivo!=".."){

									$link = "../assesi/usuarios/".$matricula."/".$pasta."/".$arquivo;
									$resposta.="<p><a href='$link' target='_blank'>$arquivo</a></p>";

									}


								}

							} else {
								
								$resposta.="<a href='#'>Pasta vazia</a>";

							}

						}

					} else {

						//$resposta.="<p> arquivo <a href='$parta'>$pasta</a></p>";
						
					}
		
			}

		} else {
			
			$resposta.="<p>Não existem arquivos cadastrados<p>";

		}
				
		return $resposta;

	}
	
}

?>