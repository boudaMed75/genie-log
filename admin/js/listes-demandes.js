let wrapper = document.querySelector(".wrapper");
aff_demnade = setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php_file/liste_demande.php", true);
    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                wrapper.innerHTML = data;
                box_demande = wrapper.querySelectorAll('.box');
                box_demande.forEach((e)=>{
                    e.onclick = ()=>{
                        let id = e.dataset.id;
                        let xhr = new XMLHttpRequest();
                        xhr.open("POST", "php_file/demande_detaills.php", true);
                        xhr.onload = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE) {
                                if (xhr.status === 200) {
                                    
                                    let data = xhr.response;
                                    demande_detaills(data);
                                }
                            }
                        };
                        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                        xhr.send("id=" + id);
                    };
                });
            }
        }
    };
    xhr.send();
},1000);
function demande_detaills(args){
    let div_content = document.createElement('div');
    div_content.classList = "demande-detaill";
    div_content.style.top = window.pageYOffset+"px";
    div_content.innerHTML = args;
    document.body.style.overflow = "hidden";
    document.body.appendChild(div_content);
    console.log(div_content.querySelector(".box .fermer"));
    div_content.querySelector(".box .fermer").onclick = ()=>{
        document.body.style.overflow = "scroll";
        div_content.remove();
    };
}