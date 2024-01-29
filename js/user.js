let demande_form = document.querySelector(".wrapper form"),
demande_input = demande_form.querySelector("textarea"),
demande_button = demande_form.querySelector("button"),
demande_err = demande_form.querySelector("div"),
env_demande = document.querySelector(".wrapper .msg-env");

demande_form.onsubmit = (e)=>{
    e.preventDefault();
};
demande_input.onkeyup = ()=>{
    if(demande_input.value.length!==0){
        demande_err.textContent = "";
    }
};
demande_button.onclick = ()=>{
    if(demande_input.value.length===0){
        demande_err.textContent = "* Fiels requied";
    }
    else{
        let xhr = new XMLHttpRequest();
        xhr.open("POST","php_file/envoyer_un_demande.php",true);
        xhr.onload = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let data = xhr.response;
                    if(data==="ok"){
                        handle_msg_succus();
                    }
                    
                }
            }
        };
        let formData = new FormData(demande_form);
        xhr.send(formData);
    }
    demande_input.value = "";
};


let user_detaills = document.getElementById("user_detaills");
let user_control = document.getElementById("user_control");
let log_out = document.getElementById("log_out");

user_detaills.onclick = ()=>{
    user_control.classList.toggle("visible");
};

log_out.onclick = ()=>{
    create_fenetre_log_out();
};


function create_fenetre_log_out(){
    let log_out_div = document.createElement("div");
    log_out_div.className = "confirmation";
    log_out_div.innerHTML = `
        <div class="box">
            <div>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            <h2>voulez-vous vraiment quitter</h2>
            
            <button id="quiter">Naah , just kidiing</button>
            <button name="r" id="retour">yes, log me out</button>
            
        </div>
    `;
    document.body.style.overflow = "hidden";
    document.body.appendChild(log_out_div);
    document.getElementById("quiter").onclick = ()=>{
        document.body.style.overflow = "scroll";
        log_out_div.remove();
    };
    document.getElementById("retour").onclick = ()=>{
        location.href = "php_file/log_out.php";
    };
}
function handle_msg_succus(){
    env_demande.style.display = "block";
    setTimeout(()=>{
        env_demande.style.display = "none";
    },2000);
}