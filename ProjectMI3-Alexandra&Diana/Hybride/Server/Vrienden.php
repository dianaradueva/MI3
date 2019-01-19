<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "dianaradueva";// dangerous
$password = "dianaraduevaMI3";// dangerous
$dbname = "events";


$con = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

function vrienden($id){
$query = "SELECT A.gebruikersnaam FROM vriendshap V JOIN account A on A.account_id = V.persoon2 WHERE V.persoon1 = '$id'";
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
    vrienden($id);
}
   

?>
