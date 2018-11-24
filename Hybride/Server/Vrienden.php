<?php

class Vrienden
{
    static public function maakVriendschap($gebruiker1, $gebruiker2, $type)
    {
        if(!empty($gebruiker1) && !empty($gebruiker2))
        {
            global $db;
            
            //knop maken
            switch($type)
            {
                case 'wachtOpAntwoord':
                    $query = $db->prepare("Select * FROM vriendenlijst WHERE Eerste_gebruiker='".$gebruiker1."' AND Tweede_gebruiker='".$gebruiker2"' AND Vriendschap='0'");
                        $query->execute();
                    return $query->rowCount();
                    break;
                case 'vriendenschap':
                    $query = $db->prepare("Select * FROM vriendenlijst WHERE Eerste_gebruiker='".$gebruiker1."' AND Tweede_gebruiker='".$gebruiker2"' AND Vriendschap='1'");
                        $query->execute();
                    return $query->rowCount();
                    break;
                    
            }
        }
    }
    
    
    static public function add($uid,$gebruiker2)
    {
        if(!empty($uid) && !empty($gebruiker2))
        {
            global $db;
            $antwoord = array();
            
            $uid = (int) $uid;
            $gebruiker2 = (int) $gebruiker2;
            
            if($uid != $gebruiker2)
            {
                $vriend = new Vrienden;
                $check = $vriend ->maakVriendschap($uid, $gebruiker2, 'Vriendenschap');
                
                if($check == 0)
                {
                    $invoegen = $db->prepare("INSERT INTO vriendenlijst VALUES('','"$uid"','".$gebruiker2."', '0', now())");
                    $invoegen->execute();
                    
                    $antwoord['code'] =0;
                $antwoord['msg'] = "Aanvraag is gestuurd";
                echo json_encode($antwoord);
                return false;
                }
                else
                {
                    $antwoord['code'] =0;
                $antwoord['msg'] = "Al vriend";
                echo json_encode($antwoord);
                return false;
                }
                
            }
            else
            {
                $antwoord['code'] =0;
                $antwoord['msg'] = "U kunt jezelf niet bevrienden";
                echo json_encode($antwoord);
                return false;
            }
        }
    }
    
}



?>