<?php
    session_start();

    // Vérification de l'authentification
    if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
        header('Location: ../index.html');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genielog : agence de creation des logiciles</title>
    <link rel="icon" href="../img/logo_site.png" type="image/png">
    <link rel="stylesheet" href="../css/normalize.css" />
    <link rel="stylesheet" href="../css/file.css" />
    <link rel="stylesheet" href="../css/framework.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="../css/all.min.css" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="styles"> -->
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">

</head>
<body>
<div id="acceil" class="scroll-value page1">
        <div class="header" id="header">
            <div class="container">
                <a href="#" class="logo">
                <img src="../img/main-logo.png" alt="">
                </a>
                <div id="nav-mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id="nav-scren-large" class="main-nav">
                    <li><a data-section="acceil" href="index.php">Accueil</a></li>
                    <li><a data-section="ajouter_clien" href="ajouter-client.php">ajouter un Client</a></li>
                    <li><a class="active" data-section="listes_clien" href="listes-clients.php">listes des Client</a></li>
                    <li id="count"><span></span><a data-section="les_demande" href="listes-demandes.php">Les demande</a></li>
                    <li ><a data-section="les_demande" href="../php_file/log_out.php">Se déconnecter</a></li>
                </ul>
            </div>
        </div>
        <div id="landing" class="admin-header">
                <div class="listes-des-client">
                <div class="wrapper">
                    <h2>voici la liste de vous client</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Telephone</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                    </div>
                </div>
        
            </div>
        
    </div>
    <div id="contact" class="scroll-value footer">
        
        <div class="info-legal">
            <div class="container">
                <div class="box">
                    2023 © <a href="">Genie Log</a>, Tous droits réservés.
                </div>
                <div class="box">
                    <a href="">CGV</a>
                    <a href="">Mentions légales</a>
                    <a href="">Politique de confidentialité</a>
                </div>
            </div>
        </div>
    </div>
    <script src="js/admin-global.js"></script>
    <script src="js/listes-clients.js"></script>
</body>
</html>