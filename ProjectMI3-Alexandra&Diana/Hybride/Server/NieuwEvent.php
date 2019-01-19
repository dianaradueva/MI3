<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$con = mysqli_connect("localhost", "dianaradueva", "dianaraduevaMI3", "events");


$Data = array('Event aanmaken' => 'false');
if(!empty($_REQUEST["NaamNieuwEvent"]) and !empty($_REQUEST["Plaats"]) and !empty($_REQUEST["Datum"]) and !empty($_REQUEST["Uur"]) and !empty($_REQUEST["Beschrijving"]) and !empty($_REQUEST["account_id"])){
    
    $NaamNieuwEvent = $_REQUEST["NaamNieuwEvent"];
    $Plaats = $_REQUEST["Plaats"];
    $Datum = $_REQUEST["Datum"];
    $Uur = $_REQUEST["Uur"];
    $Beschrijving = $_REQUEST["Beschrijving"];
    $account_id = $_REQUEST["account_id"];
    
    if($NaamNieuwEvent != "undefined" and $Plaats != "undefined" and $Datum != "undefined" and $Uur != "undefined" and $Beschrijving != "undefined" and $account_id != "undefined"){
        
    $statement = mysqli_prepare($con, "INSERT INTO evenementen(Naam, Plaats, Datum, Uur, Beschrijving, account_id) VALUES (?, ?, ?, ?, ?, ?)") or die(mysqli_error($con));
    mysqli_stmt_bind_param($statement, "sssssi", $NaamNieuwEvent, $Plaats, $Datum, $Uur, $Beschrijving, $account_id);
    mysqli_stmt_execute($statement);
        
    $Data = array('Event aanmaken' => 'true'); 
    }

}
    $json= json_encode($Data);
    print_r($json);
?>
