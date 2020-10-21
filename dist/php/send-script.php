<?php
$mailToSend = "ndziorl@gmail.con";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["email"];
    $antiSpam = $_POST["pot"];

    $errors = Array();
	$return = Array();

    if (empty($antiSpam)) {
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8". "\r\n";
        $headers .= "From: ".$email."\r\n";
        $headers .= "Reply-to: ".$email;
        $message  = "
            <html>
                <head>
                    <meta charset=\"utf-8\">
                </head>
                <body>
                    <div> Imię: $name</div>
                    <div> Email: <a href=\"mailto:$email\">$email</a> </div>
                    <div> Wiadomość: </div>
                    <div> $message </div>
                </body>
            </html>";

        if (mail($mailToSend, "Wiadomość ze strony - " . date("d-m-Y"), $message, $headers)) {
            $return["status"] = "ok";
        } else {
            $return["status"] = "error";
        }
    }

    } else {
        $return["status"] = "ok";
    }

    header("Content-Type: application/json");
    echo json_encode($return);
}