<?php

$subject = "Заявка";
$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$text = "Имя: $name\r\n";
$text .= "Телефон: $phone";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: #названиекомпании <no-reply@mail.ru\r\n";

mail('rifatvarisov@gmail.com', $subject, $text, $headers);

?>