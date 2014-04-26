<?php

class gerenciadorArquivos{

	public function imprimeDiretorio($caminho){

		$resposta;	
		
		if($pastas = scandir($caminho)){
		
			foreach ($pastas as $pasta) {

					if(is_dir($pasta)){

						if($pasta!="." and $pasta!=".."){

							$resposta.="<h3>".strtoupper($pasta)."<h3>";
							
							if($arquivos = scandir($pasta)){

								foreach ($arquivos as $arquivo) {									

									if($arquivo!="." and $arquivo!=".."){

									$resposta.="<p> arquivo <a href='$arquivo'>$arquivo</a></p>";

									}


								}

							} else {
								
								$resposta.="<a href='#'>Pasta vazia</a>";

							}

						}

					} else {

						$resposta.="<p> arquivo <a href='$parta'>$pasta</a></p>";
						
					}
		
			}

		} else {
			
			$resposta.="<p>Não existem arquivos cadastrados<p>";

		}
				
		return $resposta;

	}
	
}

?>