<?php
    include_once "config.php";
    $req = $con->prepare("SELECT * FROM client ORDER BY id_client DESC");
    $req -> execute();
    $res =$req-> fetchAll(PDO::FETCH_ASSOC);
    $output = "";
    foreach ($res as $client) {
        $output.="<tr>";
        $output.="<td>".$client['nom_client']."</td>";
        $output.="<td>".$client['prenom_client']."</td>";
        $output.="<td>".$client['tele']."</td>";
        $output.="<td>".$client['email']."</td>";
        $output.="<td>".$client['pass_word']."</td>";
        $output.="</tr>";
    }
    echo $output;
?>