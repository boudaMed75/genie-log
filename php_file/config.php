<?php
     function Last_Valeur_ID($con,$cle,$table_name,$start_valeur){
        $req = $con->prepare("SELECT ".$cle." FROM ".$table_name." order by ".$cle);
        $req->execute();
        $encas = $req->fetchAll(PDO::FETCH_COLUMN);
        if(count($encas)==0){
            $id_n = $start_valeur;
        }
        else{
            $id_n = end($encas);
        }
        return $id_n;
    }
    function id_genarateur($id) {
        $f = "";
        $k = intval(substr($id,2));
        
        if (0 <= $k && $k < 9) {
            $f = substr($id, 0, 2) . "00" . ($k + 1);
        }
        elseif (9 <= $k && $k < 99) {
            $f = substr($id, 0, 2) . "0" . ($k + 1);
        }
        elseif (99 <= $k && $k < 999) {
            $f = substr($id, 0, 2) . ($k + 1);
        }
        
        return $f;
    }
    $con = new PDO("mysql:server=localhost;dbname=genielog","root","");
    $con->query("SET NAMES 'utf8mb4'");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if(!$con){
        echo "DataBase Error !";
    }
?>
