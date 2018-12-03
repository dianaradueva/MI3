<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "dianaradueva";// dangerous
$password = "dianaraduevaMI3";// dangerous
$dbname = "events";


$con = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

function test($id){
$query = "SELECT Naam, Plaats, Datum, Uur, Beschrijving FROM evenementen where account_id = '$id'";
$result = mysqli_query($con, $query);
$rows = array();
while($row = $result->fetch_array()){
    $rows[] = $row;
}
    echo json_encode($rows);
}

if(!empty($_REQUEST["id"])){
    $id = $_REQUEST["id"];
    test($id);
}
    

?>
