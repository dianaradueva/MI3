<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$con = mysqli_connect("localhost", "dianaradueva", "dianaraduevaMI3", "events");


$Data = array('registratie' => 'false');
if(!empty($_REQUEST["naam"]) and !empty($_REQUEST["voornaam"]) and !empty($_REQUEST["gebruikersnaam"]) and !empty($_REQUEST["wachtwoord"]) and !empty($_REQUEST["email"])){
    
    $naam = $_REQUEST["naam"];
    $voornaam = $_REQUEST["voornaam"];
    $gebruikersnaam = $_REQUEST["gebruikersnaam"];
    $wachtwoord = $_REQUEST["wachtwoord"];
    $email = $_REQUEST["email"];
    
    if($naam != "undefined" and $voornaam != "undefined" and $gebruikersnaam != "undefined " and $wachtwoord != "undefined" and $email != "undefined"){
        
    $statement = mysqli_prepare($con, "INSERT INTO account (Naam, Voornaam, Gebruikersnaam, Wachtwoord, Email) VALUES (?, ?, ?, ?, ?)") or die(mysqli_error($con));
    mysqli_stmt_bind_param($statement, "sssss", $naam, $voornaam, $gebruikersnaam, $wachtwoord, $email);
    mysqli_stmt_execute($statement);
       
    $Data = array('registratie' => 'true'); 
    }

}
    $json= json_encode($Data);
    print_r($json);  
?>
