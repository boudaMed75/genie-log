<?php 
    session_start(); 
    // Vérification de l'authentification 
    if (!isset($_SESSION['authenticated-user']) || $_SESSION['authenticated-user'] !== true) {
        header('Location: index.html');
        exit;
    }    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genielog : agence de creation des logiciles</title>
    <link rel="icon" href="img/logo_site.png" type="image/png">
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/file.css" />
    <link rel="stylesheet" href="css/framework.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="css/all.min.css" />
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
                    <img src="img/main-logo.png" alt="">
                </a>
                <!-- <div id="nav-mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div> -->
                <ul id="user_detaills" class="c-pointer user-nav">
                    <li><h2 class="links-title"><?php echo $_SESSION['nom']." ".$_SESSION['prenom']  ?></h2></li>
                    <li><i class="fa-solid fa-user"></i></li>
                </ul>
            </div>
        </div>
        <div id="user_control" class="user-control">
            <div class="control_header">
                <div class="user-info">
                    <div><i class="fa-solid fa-user"></i></div>
                    <div class="info">
                        <h2 class=""><?php echo $_SESSION['nom']." ".$_SESSION['prenom']  ?></h2>
                        <p><?php echo $_SESSION['email'] ?></p>
                    </div>
                </div>
                <div>
                    <button>Gerer votre compte genie log</button>
                </div>
            </div>
            <a id="log_out" class="c-pointer log_out">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <h4>Se deconnecter</h4>
            </a>
            <div class="user-footer">
                <span>Politique de confidentialité.</span>
                <span>conditions d’utilisation</span>
            </div>
        </div>
        <div id="landing" class="admin-header">
            <div class="wrapper">
                <div class="text-center"><p class="service-informations">Bonjour <span class="service-titre">MR <?php echo $_SESSION['nom']." ".$_SESSION['prenom']  ?></span></p></div>
                <div class="service-informations">Nous apprécions votre confiance et votre partenariat. Nous sommes fiers de pouvoir vous fournir les logiciels dont vous avez besoin pour réussir.</div>
                <div class="service-informations">Nous apprécions votre intérêt pour nos produits et services. Nous aimerions en savoir plus sur vos besoins afin de vous proposer la solution la plus adaptée.</div>
                <div class="service-informations">Pourriez-vous nous faire part de vos besoins en détail ?</div>
                <div class="msg-env">
                    message Envoyer avec succus
                </div>
                <form action="">
                    <textarea name="demande" id="" cols="30" rows="10"></textarea>
                    <div class="input_err"></div>
                    <button>Envoyer</button>
                    
                </form>
                <div class="service-informations">Nous vous remercions de votre temps et de votre considération.Cordialement,</div>
                <div class="text-center"><p class="service-informations">L'équipe de<span class="service-titre">Genie Log</span></p></div>
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
    
    <script src="js/user.js"></script>

</body>
</html>