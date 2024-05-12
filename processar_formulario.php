<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Configurações para enviar o email
    $destinatario = "avlis.cleo@gmail.com"; // Substitua pelo seu endereço de email
    $assunto = "Nova mensagem do formulário de contato";

    // Monta o corpo do email
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem\n";

    // Envia o email
    if (mail($destinatario, $assunto, $corpo_email)) {
        // Exibe uma mensagem de sucesso
        echo "<h2>Obrigado! Sua mensagem foi enviada com sucesso.</h2>";
    } else {
        // Se houver um erro no envio do email, exibe uma mensagem de erro
        echo "<h2>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.</h2>";
    }
} else {
    // Se o formulário não foi enviado, exibe uma mensagem de erro
    echo "<h2>Erro: O formulário não foi enviado.</h2>";
}
?>
