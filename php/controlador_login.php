<?php

include 'gerenciadorArquivos.php';
include 'repositorio_usuario.php;'

$gerenciador = new gerenciadorArquivos();
$repositorio = new repositorio_usuario();


$login = $_POST['login'];
$senha = $_POST['senha'];

$repositorio_usuario->conectar();

if($repositorio_usuario->autenticaUsuario($login,$senha)){

	echo $gerenciador->imprimeDiretorio(getcwd());

} else {

	echo "<h3>Usuário Inválio, tente novamente<h3>
		  <p><a href='#'>Voltar</a></p>"

}




?>
