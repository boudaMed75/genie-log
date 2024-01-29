<?php
    session_start();
    include_once "config.php";
    $demande = $_POST["demande"];
    if(isset($demande)){
        $id_n = Last_Valeur_ID($con,"id_demande","demande","DM000");
        $stmt = $con->prepare("INSERT INTO demande VALUES (?,?,?,?,?)");
        $stmt->bindValue(1,id_genarateur($id_n));
        $stmt->bindValue(2,date('Y-m-d H:i:s', time()));
        $stmt->bindValue(3,$demande);
        $stmt->bindValue(4,$_SESSION['id']);
        $stmt->bindValue(5,"null");
        if($stmt->execute()){
            echo "ok";
        }
        else{
            echo "Something Went wrong";
        }
    }
    else{
        echo "an error";
    }
?>