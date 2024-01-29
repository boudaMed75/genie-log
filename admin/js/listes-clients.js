
let table_content = document.querySelector("#landing .wrapper table tbody");

setInterval(()=>{


    let xhr = new XMLHttpRequest();
    xhr.open("POST","php_file/liste_client.php",true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data!==""){
                    table_content.innerHTML = data;
                    ajouter_clien_ntf=false;
                }
            }
        }
    };
    xhr.send();
},2000);
