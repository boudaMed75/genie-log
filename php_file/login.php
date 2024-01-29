<?php
    session_start();
    include_once "config.php";
    $user_name = $_POST['email'];
    $pass = $_POST['pass'];
    $add = "GenieLog@Admin.ma";
    $p_admin = "AdminGenielog";
    
    if(isset($user_name) && isset($pass)){
        if(!empty($user_name) && !empty($pass)){
            if($user_name===$add && $pass===$p_admin){
                $_SESSION['authenticated']=true;
                echo "admin";
            }
            else{
                $req = $con->prepare("SELECT * FROM client WHERE email= ? AND pass_word = ?");
                $req->bindValue(1,$user_name);
                $req->bindValue(2,$pass);
                $req->execute();
                $row = $req-> fetchAll(PDO::FETCH_ASSOC);
                if(!empty($row)){
                    $_SESSION['id']= $row[0]['id_client'];
                    $_SESSION["nom"]= $row[0]['nom_client'];
                    $_SESSION['prenom']= $row[0]['prenom_client'];
                    $_SESSION['tele']= $row[0]['tele'];
                    $_SESSION['email']= $row[0]['email'];
                    $_SESSION['authenticated-user'] = true ;
                    echo "user";
                }
                else{
                    echo "email or password is incorrect !";
                }
            }
        }
        else{
            echo "all input are required";
        }
    }
    else{
        echo "somthing are wrong";
    }

?>

