const email_div = document.querySelector(".ajouter_clien .email"),
email_input = email_div.querySelector("#email"),
email_err = email_div.querySelector("div");
const password_div = document.querySelector(".ajouter_clien .pass"),
pass_input = password_div.querySelector("input"),
pass_err = password_div.querySelector("div"),
div_succes = document.querySelector(".ajouter_clien .succes-msg");
console.log(div_succes);


let all_is_ok = true;
email_input.onkeyup = ()=>{
    console.log(email_input.value);
    if(validateEmail(email_input.value)){
        email_err.textContent = "* Entrer un email valid";
        email_err.classList.add("email-err");
        all_is_ok = false;
    }
    else{
        email_err.textContent = "";
        email_err.classList.remove("email-err");
        all_is_ok = true;
    }
};
pass_input.onkeyup = ()=>{
    if(pass_input.value.length<8){
        pass_err.textContent = "* mot de pass contient au moins 8 caractere";
        pass_err.classList.add("email-err");
        all_is_ok = false;
    }
    else{
        pass_err.textContent = "";
        pass_err.classList.remove("email-err");
        all_is_ok = true;
    }
}
const ajouter_client_form = document.querySelector(".ajouter_clien form"),
ajouter_clien_button = ajouter_client_form.querySelector("button"),
form_err = ajouter_client_form.querySelector(".error-txt");
ajouter_client_form.onsubmit = (e)=>{
    e.preventDefault();
};
ajouter_clien_button.onclick = ()=>{
    const form_input = ajouter_client_form.querySelectorAll("input"),
    input_err = ajouter_client_form.querySelectorAll(".fields div");
    console.log(form_input);
    form_input.forEach((e,index)=>{
        if(e.value.length===0){
            input_err[index].textContent = "* field is requred";
            input_err[index].classList.add("email-err");
            all_is_ok = false;
        }
        else{
            input_err[index].textContent = "";
            input_err[index].classList.remove("email-err");
        }
    });
    if(all_is_ok){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","php_file/ajouter_client.php",true);
        xhr.onload = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let data = xhr.response;
                    if(data==="ok"){
                        div_succes.querySelector("p").textContent = `Le Client ${form_input[0].value} ${form_input[1].value}  A ete Ajouter Avec Succus `;
                        div_succes.style.display = "flex";
                        form_input.forEach((e)=>{
                            e.value = "";
                        });
                        element_hide(div_succes);
                        div_succes.querySelector(".fermer").onclick=()=>{
                            div_succes.style.display = "none";
                        }
                        ajouter_clien_ntf = true;
                    }
                    else{
                        form_err.textContent = data;
                        form_err.style.display = "block";
                    }
                }
            }
        };
        let formData = new FormData(ajouter_client_form);
        xhr.send(formData);
    }
}

function handle_lien (element){
    nav_bar.forEach((e)=>{
        e.classList.remove("active");
    });
    element.classList.add("active");
}
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        return true;
    }   
    return false;
}
function element_hide (element){
    setInterval(()=>{
        element.style.display = "none";
    },10000);
}

