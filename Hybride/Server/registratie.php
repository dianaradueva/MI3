<?php
$con = mysqli_connect("localhost", "dianaradueva", "dianaraduevaMI3", "events_db");
$naam = $_REQUEST["naam"];
$voornaam = $_REQUEST["voornaam"];
$gebruikersnaam = $_REQUEST["gebruikersnaam"];
$wachtwoord = $_REQUEST["wachtwoord"];
$email = $_REQUEST["email"];
     $statement = mysqli_prepare($con, "INSERT INTO account (naam, voornaam,gebruikersnaam, wachtwoord, email) VALUES (?, ?, ?, ?, ?)") or die(mysqli_error($con));
mysqli_stmt_bind_param($statement, "sssss", $naam, $voornaam, $wachtwoord, $email);
mysqli_stmt_execute($statement);
$response = "true";
$req_dump = print_r($_REQUEST, TRUE);
$fp = fopen('request.log', 'a');
fwrite($fp, $req_dump);
fclose($fp);
echo $response;
?>
