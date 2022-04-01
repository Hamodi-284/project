<?php

    Define ( 'DB_HOST', '127.0.0.1' );
    Define ( 'DB_USERNAME', 'root' );
    Define ( 'DB_PASSWORD', 'Hamodi8240' );
    Define ( 'DB_DATABASE', 'timeplanlegger' );



    //Henter bruker med bruukernavn//
    
        function getUsers () {

        $mysqli= new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

        if(mysqli_connect_error()){
            die('Connect Error ('.mysqli_connect_error().') '.mysqli_connect_error());
        }

          $mysqli->set_charset("utf8");

        $sql ="SELECT * FROM person";

        $result = $mysqli->query($sql);

        $row = $result->fetch_assoc();

        $mysqli->close();

        return $row;

}

   

?>



