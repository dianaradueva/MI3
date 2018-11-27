<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "dianaradueva";// dangerous
$password = "dianaraduevaMI3";// dangerous
$dbname = "events";

$con = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

function evenementen($con){
$query = "SELECT Naam, Plaats, Datum, Uur ,Beschrijving FROM evenementen where account_id = 91";
$result = mysqli_query($con, $query);
$rows = array();
while($row = $result->fetch_array()){
    $rows[] = $row;
}
echo json_encode($rows);

}
?>
