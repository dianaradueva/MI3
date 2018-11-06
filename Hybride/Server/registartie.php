<?php
$con = mysqli_connect("localhost", "alexandraklochkova", "alexandraklochkovaMI3", "events_db");
$name = $_REQUEST["name"];
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$age = $_REQUEST["age"];
     $statement = mysqli_prepare($con, "INSERT INTO accounts (name, username,password, age) VALUES (?, ?, ?, ?)") or die(mysqli_error($con));
mysqli_stmt_bind_param($statement, "sssi", $name, $username, $password, $age);
mysqli_stmt_execute($statement);
$response = "true";
$req_dump = print_r($_REQUEST, TRUE);
$fp = fopen('request.log', 'a');
fwrite($fp, $req_dump);
fclose($fp);
echo $response;
?>
