<?php

class repositorio_usuario{

$hostname = "dbmy0102.whservidor.com";
$username = "pilotoauto1";
$password = "Sp1l0toS";
$database = "pilotoauto1";

$conexao;
$selecionabd;

public function conectar(){

this->$conexao = mysql_connect($hostname, $username, $password) or die ("Erro na conexão do banco de dados.");
this->$selecionabd = mysql_select_db($database,$conexao) or die ("Banco de dados inexistente.");

}


public function autenticaUsuario($login, $senha){

	$sql = "SELECT * FROM usuario WHERE matricula = '$login' AND senha = '$senha'"
	$resultado = mysql_query($sql,$conexao);
	
	return mysql_num_rows($resultado) > 0;

}


}


?>