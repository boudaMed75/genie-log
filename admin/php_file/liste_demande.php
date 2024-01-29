<?php
    include_once "config.php";
    function afficherDateRelative($date) {
        $now = time(); // Current timestamp
        $timestamp = strtotime($date); // Convert the date to a timestamp
        
        $diff = $now - $timestamp; // Difference between the current time and the given timestamp
        
        $seconds = $diff;
        $minutes = round($diff / 60);
        $hours = round($diff / (60 * 60));
        $days = round($diff / (60 * 60 * 24));
        $weeks = round($diff / (60 * 60 * 24 * 7));
        
        if ($seconds < 60) {
            return 'Il y a ' . $seconds . ' seconde(s)';
        } elseif ($minutes < 60) {
            return 'Il y a ' . $minutes . ' minute(s)';
        } elseif ($hours < 24) {
            return 'Il y a ' . $hours . ' heure(s)';
        } elseif ($days < 7) {
            return 'Il y a ' . $days . ' jour(s)';
        } else {
            return 'Il y a ' . $weeks . ' semaine(s)';
        }
    }
    function Nom_client($id,$con){
        $req1 = $con->prepare("SELECT  nom_client,prenom_client FROM client WHERE id_client = ?");
        $req1->bindValue(1,$id);
        $req1->execute();
        if ($req1->rowCount() > 0) {
            $client = $req1->fetch();
            return $client["nom_client"] . " " . $client["prenom_client"];
        } else {
            return "";
        }
    }
    $req = $con->prepare("SELECT * FROM demande ORDER BY id_demande DESC");
    $req -> execute();
    $res =$req-> fetchAll(PDO::FETCH_ASSOC);
    $output = "";
    foreach ($res as $client) {
        $output.="
        <div data-id=\"".$client['id_demande']."\" class=\"box\">
                <div class=\"box-info\">
                <div class=\"img-logo\">
                    <i class=\"fa-solid fa-user\"></i>
                </div>
                <div class=\"info\">
                    <h2>".Nom_client($client['id_client'],$con)."</h2>
                    <p>".afficherDateRelative($client['date_demande'])."</p>
        ";
        if($client['demande_status']=="null"){
            $output.= "<div class=\"nouveu\">nouveau</div>";
        }
        $output.="
                </div>
            </div>
            <div class=\"box-content\">
                <p class=\"service-informations\">".$client['demande_content']."</p>
            </div>
            </div>
        ";
    }
    echo $output;
?>