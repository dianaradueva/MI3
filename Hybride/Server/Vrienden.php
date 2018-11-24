<?php

class Vrienden
{
    static public function maakVriendenschap($gebruiker1, $gebruiker2, $type)
    {
        if(!empty($gebruiker1) && !empty($gebruiker2))
        {
            global $db;
            
            //knop maken
            switch($type)
            {
                case 'wachtOpAntwoord':
                    $query = $db->prepare("Select * FROM vriendenlijst");
                    break;
                case 'vriendenschap':
                    break;
                    
            }
        }
    }
}



?>