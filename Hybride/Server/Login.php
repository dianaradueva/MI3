<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$con = mysqli_connect("localhost", "dianaradueva", "dianaraduevaMI3", "events");

if(isset($_REQUEST["gebruikersnaam"]) and isset($_REQUEST["wachtwoord"])){
        
        $gebruikersnaam = $_REQUEST['gebruikersnaam'];
        $wachtwoord = $_REQUEST['wachtwoord'];
        $query = "SELECT * FROM `account` WHERE gebruikersnaam='$gebruikersnaam' and wachtwoord='$wachtwoord'";
        $result = mysqli_query($con, $query) or die(mysqli_error($con));
        $count = mysqli_num_rows($result);
        if ($count == 1){
        $Data = array('login' => 'true');
        }else{
            $Data = array('login' => 'false');
        }
    }
        $json= json_encode($Data);
        print_r($json);  
?>
