<?php
    include_once "config.php";
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $tele = $_POST["tele"];
    $email = $_POST["email"];
    $pass_word = $_POST["pass"];
    $confir = $_POST['confirmation'];
    if(isset($nom) && isset($prenom) && isset($tele) && isset($email) && isset($pass_word)){
        if($pass_word === $confir){
            $stmt = $con->prepare("SELECT email FROM client WHERE email = :mail");
            $stmt->bindValue(":mail", $email, PDO::PARAM_STR);
            $stmt->execute();
            $res = $stmt->fetchAll(PDO::FETCH_COLUMN);
            if(!$res){
                $id_n = Last_Valeur_ID($con,"id_client","client","CL000");
                $stmt = $con->prepare("INSERT INTO client VALUES (?,?,?,?,?,?)");
                $stmt->bindValue(1,id_genarateur($id_n));
                $stmt->bindValue(2,$nom);
                $stmt->bindValue(3,$prenom);
                $stmt->bindValue(4,$tele);
                $stmt->bindValue(5,$email);
                $stmt->bindValue(6,$pass_word);
                if($stmt->execute()){
                    echo "ok";
                }
                else{
                    echo "Something Went wrong";
                }
            }
            else{
                echo "$email - alery existe dans la bse de donne";
            }
        }
        else{
            echo "confirmer le mot de passe";
        }
    }
    else{
        echo "an error";
    }
?>