<?php

include 'gerenciadorArquivos.php';
include 'repositorio_usuario.php';

$login = $_GET['login'];
$senha = $_GET['senha'];

$gerenciador = new gerenciadorArquivos();
$diretorio = "e:\home\pilotoauto1\Web/assesi/usuarios/".$login."/";


if(autenticar($login,$senha)){

	echo $gerenciador->imprimeDiretorio($diretorio, $login);


} else {

	echo "<h3>Usuário Inválido, tente novamente</h3><a href='#'>Voltar</a>";

}




?>
