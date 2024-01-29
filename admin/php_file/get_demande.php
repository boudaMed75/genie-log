<?php
    include_once "config.php";
    $req = $con->prepare("SELECT COUNT(demande_status) FROM demande WHERE demande_status = 'null'");
    $req -> execute();
    $count = $req -> fetchColumn();
    echo $count;
?>