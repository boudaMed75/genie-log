const header = document.getElementById("header");
const nav_mobile = document.getElementById("nav-mobile");
nav_mobile.onclick = ()=>{
    let mobile_nav_bar = document.createElement("div");
    mobile_nav_bar.className = "arriere";
    document.body.style.overflow = "hidden";
    document.body.appendChild(mobile_nav_bar);
    mobile_nav_bar.innerHTML = `<div id="close">
              
    </div>
    <ul>
    <li><a href="index.php">Accueil</a></li>
    <li><a href="ajouter-client.php">Ajouter Un Client</a></li>
    <li><a href="listes-clients.php">Listes Des Client</a></li>
    <li><a href="listes-demandes.php">Liste Des Demandes</a></li>
    <li><a href="../php_file/log_out.php">Se déconnecter</a></li>
    </ul>`;
    document.getElementById("close").onclick = ()=>{
      console.log("bouda");
      document.body.style.overflow = "scroll";
      mobile_nav_bar.remove();
    };
    
    
  };

let demande_notification = document.querySelector("#count span");
console.log(demande_notification);
setInterval(()=>{
    let xhr = new XMLHttpRequest();
        xhr.open("POST","php_file/get_demande.php",true);
        xhr.onload = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let data = xhr.response;
                    if(data==="0"){
                        demande_notification.style.display = "none";
                    }
                    else{
                        demande_notification.textContent = data;
                        demande_notification.style.display = "block";
                    }
                }
            }
        };
    xhr.send();
},1000);
