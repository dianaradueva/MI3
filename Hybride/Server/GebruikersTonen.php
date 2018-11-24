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
                }
                else
                {
                    //Toon aanvrag
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