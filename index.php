<?php 
    include 'includes/database.php';

    
    $users = getUsers ();

    $firstname = $users['fornavn'];
    $lastname = $users['etternavn'];
    

    echo "<p>".$firstname."</p>";
    echo "<p>".$firstname."</p>";



?>