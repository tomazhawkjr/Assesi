<?php

include 'gerenciadorArquivos.php';

$gerenciador = new gerenciadorArquivos();

$matricula = "123456";
echo $gerenciador->imprimeDiretorio("e:\home\pilotoauto1\Web/assesi/usuarios/".$matricula."/");


?>
