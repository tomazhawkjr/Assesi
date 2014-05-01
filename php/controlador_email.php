<?php

$nome     = $_POST['nome'];
$email    = $_POST['email'];
$mensagem = $_POST['mensagem'];

$quebra_linha = "\r\n";

$corpo  = "Nome: ".$nome.$quebra_linha;
$corpo .= "Email: ".$email.$quebra_linha;
$corpo .= "Mensagem: ".$mensagem.$quebra_linha;

$mensagemHTML = '<p>'.$corpo.'</p>';
 
 
$headers = "MIME-Version: 1.1" .$quebra_linha;
$headers .= "Content-type: text/html; charset=iso-8859-1" .$quebra_linha;
// Perceba que a linha acima contém "text/html", sem essa linha, a mensagem não chegará formatada.
$headers .= "From: " . $email.$quebra_linha;
$headers .= "Reply-To: " . $email . $quebra_linha;
// Note que o e-mail do remetente será usado no campo Reply-To (Responder Para)
 
/* Enviando a mensagem */
//É obrigatório o uso do parâmetro -r (concatenação do "From na linha de envio"), aqui na Locaweb:
if(!mail('tomazhawkjr@gmail.com', 'Contato Site', $mensagemHTML, $headers ,"-r".$email)){ // Se for Postfix
    $headers .= "Return-Path: " . $email . $quebra_linha; // Se "não for Postfix"
    mail('tomazhawkjr@gmail.com', 'Contato Site', $mensagemHTML, $headers );
}

echo $nome;

?>