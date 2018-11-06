<?php 
$con = mysqli_connect("localhost", "alexandraklochkova", "alexandraklochkovaMI3", "events_db");
    $gebruikersnaam = $_REQUEST["NAAM"];
    $wachtwoord = $_REQUEST["WACHTWOORD"];
    
    $statement = mysqli_prepare($con, "SELECT * FROM account WHERE username = ? AND password = ?") or die(mysqli_error($con));
    mysqli_stmt_bind_param($statement, "ss", $username, $password);
    mysqli_stmt_execute($statement);
    
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $userID, $name, $age, $username, $password);
    
    $response = array();
    $response["success"] = false;  
    
    while(mysqli_stmt_fetch($statement)){
        $response["success"] = true;  
        $response["NAAM"] = $naam;
        $response["VOORNAAM"] = $voornaam;
        $response["GEBRUIKERSNAAM"] = $gebruikersnaam;
        $response["WACHTWOORD"] = $wachtwoord;
        $response["EMAIL"] = $email;
    }
    
    echo json_encode($response);
?>
