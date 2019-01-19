<?php

session_start();
$_SESSION['uid'] = 2; //default ingelogde gebruiker

//gebruikers halen
     $db = mysqli_connect("localhost", "alexandraklochkova", "alexandraklochkovaMI3", "events");
require 'Server/Vrienden.php';

if(isset($_POST['tags']))
{
    if($_POST['tags'] == 'addFriend')
    {
        $vrienden = new Vrienden;
        $vrienden->add($_POST['uid'], $_SESSION['uid']);
    }
}
?>