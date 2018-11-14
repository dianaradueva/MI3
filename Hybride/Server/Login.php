<?php 
$con = mysqli_connect("localhost", "dianaradueva", "dianaraduevaMI3", "events");

    if(isset($_REQUEST["gebruikersnaam"]) and isset($_REQUEST["wachtwoord"])){
        
        $gebruikersnaam = $_REQUEST['gebruikersnaam'];
        $wachtwoord = $_REQUEST['wachtwoord'];
        $query = "SELECT * FROM `account` WHERE gebruikersnaam='$gebruikersnaam' and wachtwoord='$wachtwoord'";
        $result = mysqli_query($con, $query) or die(mysqli_error($con));
        $count = mysqli_num_rows($result);
        if ($count == 1){
            echo "true";
        }else{
            echo "false";
        }
        
    }
    echo 'erte';
    
?>
