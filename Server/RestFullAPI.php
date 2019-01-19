<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "dianaradueva";// dangerous
$password = "dianaraduevaMI3";// dangerous
$dbname = "events";


$con = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

function evenementen($id){
$query = "SELECT E.Naam, Plaats, Datum, Uur, Beschrijving, gebruikersnaam FROM evenementen E INNER JOIN account A ON E.account_id = A.account_id where E.account_id = '$id'";
    global $con;
$result = mysqli_query($con, $query);
$rows = array();
while($row = $result->fetch_array()){
    $rows[] = $row;
}
    echo json_encode($rows);
}


if(!empty($_REQUEST["id"])){
    $id = $_REQUEST["id"];
    evenementen($id);
    //data($id);
}
    

?>
