<?php


	$hostname = "dbmy0102.whservidor.com";
	$username = "pilotoauto1";
	$password = "Sp1l0t0S";
	$database = "pilotoauto1";

	$conexao = mysql_connect($hostname, $username, $password);
	$selecionabd = mysql_select_db($database);


	function autenticar($login, $senha){		

		$sql = "SELECT * FROM usuarios WHERE matricula='$login' AND senha='$senha'";
		$resultado = mysql_query($sql);

		return mysql_num_rows($resultado);

	}

	function fecharConexao(){

		mysql_close();

	}



?>