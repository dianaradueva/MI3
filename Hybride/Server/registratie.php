<?php
    $con = mysqli_connect("localhost", "dianaradueva", "dianaraduevaMI3", "events");

   if(isset($_REQUEST["naam"]) and isset($_REQUEST["voornaam"]) and isset($_REQUEST["gebruikersnaam"]) and isset($_REQUEST["wachtwoord"]) and isset($_REQUEST["email"])){
    
    $naam = $_REQUEST["naam"];
    $voornaam = $_REQUEST["voornaam"];
    $gebruikersnaam = $_REQUEST["gebruikersnaam"];
    $wachtwoord = $_REQUEST["wachtwoord"];
    $email = $_REQUEST["email"];

    $statement = mysqli_prepare($con, "INSERT INTO account (Naam, Voornaam, Gebruikersnaam, Wachtwoord, Email) VALUES (?, ?, ?, ?, ?)") or die(mysqli_error($con));
    mysqli_stmt_bind_param($statement, "sssss", $naam, $voornaam, $gebruikersnaam, $wachtwoord, $email);
    mysqli_stmt_execute($statement);
       
       echo 'registratie gelukt';
}
else{
    $response = "Missing Input";
    echo $response;
}
?>
