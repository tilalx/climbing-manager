<?php
$host = "db.aelx.de";
$name = "climb";
$user = "climb";
$passwort = "5bLQ93v39iSyHd3i";
try{
    $mysql = new PDO("mysql:host=$host;dbname=$name", $user, $passwort);
} catch (PDOException $e){
    echo "SQL Error: ".$e->getMessage();
}
 ?>
