<html>
    
<head>
    <style>
        .hidden{
            display:none;
        }
    </style>
    
    </head>
    
    <body>
    <?php
        
        //Sessie maken
        session_start();
        $_SESSION['uid'] = 1;
        
        //connectie naar database
        $db = mysqli_connect("localhost", "alexandraklochkova", "alexandraklochkovaMI3", "events");
        
        require 'Server/Vrienden.php';
        
        $query = $con->prepare("SELECT * FROM account");
        $query->execute();
        
        if($query->rowCount()>0)
        {
            while($fetch = $query->fetch(PDO::FETCH_ASSOC))
            {
                $accound_id=$fetch['accound_id'];
                $username=$fetch['gebruikersnaam'];
                ?>
        <div>
        <h3>   <?php 
            echo $username; ?>    
            </h3>
            <div class="actions">
                <?php 
                if($account_id != $_SESSION['uid']){
                    //Knoppen tonen om vrienden toe te voegen
                    if(Vrienden:maakVriendschap($_SESSION)['uid'], $accound_id, 'wachtOpAntwoord')==1){
                    ?>
                <button class="wachtBtn" disabled>Wacht op antwoord</button>
                <?php
                    }
                    else{
                        if(Vrienden:maakVriendschap($_SESSION)['uid'], $accound_id, 'wachtOpAntwoord')==0){
                        ?>
                <button class="vriendBtn" data-uid='<?php echo $accound_id;?>' data-type='addFriend'>Voe als een vriend toe</button>
                <button class="wachtBtn hidden" disabled>Wacht op antwoord</button>
                
                <?php
                    }else{
                          ?>
                <button class="geenVriendBtn" data-uid='<?php echo $accound_id;?>' data-type='unFriend'>Geen vriend</button>
                <button class="vriendBtn" data-uid='<?php echo $accound_id;?>' data-type='addFriend'>Voe als een vriend toe</button>
                <button class="wachtBtn hidden" disabled>Wacht op antwoord</button>
                
                <?php
                        }
                    
                    }
                else
                {
                    //Toon aanvraag
                    $aanvraag = $db->prepare("SELECT * FROM vriendenlijst WHERE Eerste_gebruiker='".$_SESSION['uid']."' AND Vriendschap='0'");
                    $aanvraag->execute();
                    
                    if($aanvraag->rowCount() > 0)
                    {
                        while($fetch = $request->fetch(PDO::FETCH_ASSOC))
                        {
                            $gebruiker2 = $fetch['Tweede_gebruiker'];
                            
                            $gebruiker = $db->prepare("SELECT * FROM account WHERE id='".$gebruiker2."'");
                            $gebruiker->execute();
                            
                            $fetch_gebruiker = $gebruiker->fetch(PDO::FETCH_ASSOC);
                            
                            $gebruikersnaam=$fetch_gebruiker['gebruikersnaam'];
                            ?>
                <div class="aanvraag">
                
                <h4 style="padding: 0; margin: 0;"><?php echo ucwords($gebruikersnaam); ?> wilt uw vriend worden </h4>
                <buttons class="vriendBtn accept">Accepteren</buttons>
                    <buttons class="vriendBtn negeren">Negeren</buttons>
                </div>
                <?php
                            
                        }
                    }
                    else
                    {
                        echo "Geen aanvraag";
                    }
                    
                }
                ?> </div>
        </div>
            }
        }
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src='js/Vrienden.js' > </script>
        <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
         <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="../js/materialize.min.js"></script>
    <script type="text/javascript" src="../js/Connectie.js"></script>
        
    </body>
</html>