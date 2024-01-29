const header = document.getElementById("header");
const nav_mobile = document.getElementById("nav-mobile");



var divArray = document.querySelectorAll('.scroll-value');

function checkScrollPosition(divElement) {
  var divRect = divElement.getBoundingClientRect();
  var startScroll = divRect.top + window.pageYOffset;
  var endScroll = divRect.bottom + window.pageYOffset;
  var currentScroll = window.pageYOffset;
  var element = document.querySelector('[data-lien="' + divElement.id + '"]');
  
  if (currentScroll >= startScroll - 120 && currentScroll <= endScroll) {
    element.classList.add("active");
  }
  else{
    element.classList.remove("active");
  }
}



function handleResize() {
  for (var i = 0; i < divArray.length; i++) {
    var divElement = divArray[i];
    checkScrollPosition(divElement);
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('scroll', function() {
  for (var i = 0; i < divArray.length; i++) {
    var divElement = divArray[i];
    checkScrollPosition(divElement);
  }
});





nav_mobile.onclick = ()=>{
  let mobile_nav_bar = document.createElement("div");
  mobile_nav_bar.className = "arriere";
  document.body.style.overflow = "hidden";
  document.body.appendChild(mobile_nav_bar);
  mobile_nav_bar.innerHTML = `<div id="close">
            
  </div>
  <ul>
  <li><a data-lien="acceil" href="#">Accueil</a></li>
                    <li><a data-lien ="Expertises" href="#Expertises">Expertises</a></li>
                    <li><a data-lien="Reference" href="#Reference">References</a></li>
                    <li><a data-lien="Agence" href="#Agence">Agence web</a></li>
                    
                    <li><a data-lien="contact" href="#contact">Contact</a></li>
                    <li><a id="mobile-seconnecter" href="#" >Se Connecter</a></li>
  </ul>`;
  document.getElementById("close").onclick = ()=>{
    console.log("bouda");
    document.body.style.overflow = "scroll";
    mobile_nav_bar.remove();
  };
  document.getElementById("mobile-seconnecter").onclick = (e)=>{
    e.preventDefault();
    mobile_nav_bar.remove();
    create_login_page();
  }
  mobile_link = mobile_nav_bar.querySelectorAll("ul li a");
  mobile_link.forEach((ele)=>{
    ele.addEventListener('click', function(event) {
      event.preventDefault();
      const targetElement = document.getElementById(ele.dataset.lien);
      const targetOffset = targetElement.offsetTop - 130;
      document.body.style.overflow = "scroll";
      mobile_nav_bar.remove();
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
    
  });
};

let send_mail = document.getElementById("appelez-nous");
send_mail.addEventListener('click', function(event) {
  event.preventDefault();
});

send_mail.onclick = ()=>{
  let send_email_page = document.createElement("div");
  send_email_page.className = "send-email";
  document.body.style.overflow = "hidden";
  document.body.appendChild(send_email_page);
  let number1 = getRandomNumber(),
  number2 = getRandomNumber();
  send_email_page.innerHTML = `
  <div class="titre">
            <h1>Travaillon ensemble !</h1>
            <p>Un projet en tête ? une simple idée ? une demande de devis ? Contactez-nous !</p>
            <div id="fermer" class="form-fermer">
                <span>fermer</span>
            </div>
        </div>
    <form action="">
    <div class="fields">
        <label for="">Nom <span>*</span></label>
        <input type="text"> 
        <div class="email"></div>
    </div>
    <div class="fields">
        <label for="">Prenom <span>*</span></label>
        <input type="text">
        <div class="email"></div>
    </div>
    <div class="fields">
        <label for="">Email <span>*</span></label>
        <input id="email" type="text">
        <div id="email_err" class="email"></div>
    </div>
    <div class="fields">
        <label for="">Telephone <span>*</span></label>
        <input type="text">
        <div class="email"></div>
    </div>
    <div class="fields">
        <label for="">Object <span>*</span></label>
        <input type="text">
        <div class="email"></div>
    </div>
    <div>
        <label for="">message <span>*</span></label>
        <textarea class="text-aria" name="" id="" cols="30" rows="10"></textarea>
        <div class="text-aria email"></div>
    </div>
    <div class="fields">
        <label for="">Question Mathematique <span>*</span></label>
        <p> ${number1} + ${number2} =  </p>
        <input type="text">
        <div class="email"></div>
        <p>Résolvez ce problème mathématique simple et entrez le résultat. Par exemple. pour 1+3, entrez 4.</p>
    </div>
    <button id="env_email">Envoyer</button>
</form>
  `;
  document.getElementById("fermer").onclick = ()=>{
    document.body.style.overflow = "scroll";
    send_email_page.remove();
  };
  send_email_page.querySelector("form").onsubmit = (e)=>{
    e.preventDefault();
  };
  // Envoyer_email();
};
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  return randomNumber;
}

function Envoyer_email(){
  let button_env = document.getElementById("env_email"),
  email_field = document.getElementById("email"),
  email_err = document.getElementById("email_err"),
  semd_email_input = document.querySelectorAll(".send-email form .fields input"),
  semd_email_errs = document.querySelectorAll(".send-email form .fields div"),
  message_value = document.querySelectorAll(".send-email form .text-aria");
  let all_is_ok = true;
  console.log(semd_email_input);
  console.log(semd_email_errs);
  email_field.onkeyup = ()=>{
    if(validateEmail(email_field.value)){
      email_err.style.display = "block";
      email_err.textContent = "entrer un valid email ";
      all_is_ok = false;
    }
    else{
      email_err.style.display = "none";
      email_err.textContent = "";
      all_is_ok = true;
    }

  }
  button_env.onclick = ()=>{
    semd_email_input.forEach((e,index)=>{
      if(e.value.length === 0){
        semd_email_errs[index].style.display= "block";
        semd_email_errs[index].textContent = "this fiels is requered";
        all_is_ok = false;
      }
      else{
        semd_email_errs[index].style.display= "none";
        semd_email_errs[index].textContent = "";
      }
    });
    if(message_value[0].value.length === 0){
      message_value[1].style
    }
    if(all_is_ok){
      console.log("all is ready to send email to server");
    }
  };
}




window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    if (scrollPosition >= windowHeight) {
      header.classList.add("fixe_header");
    }
    else{
        header.classList.remove("fixe_header");
    }
    
});


const scrollLink = document.querySelectorAll("#nav-scren-large li a");
GoToSection(scrollLink);

function GoToSection(element){
  element.forEach((ele)=>{
    if (ele !== element[element.length - 1]) {
      ele.addEventListener('click', function(event) {
        event.preventDefault();
        const targetElement = document.getElementById(ele.dataset.lien);
        const targetOffset = targetElement.offsetTop - 130;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      });
    }
    else{
      ele.addEventListener('click', function(event) {
        event.preventDefault();
        create_login_page();
        
      });
      
    }
    
  });
}
fetch('js/project.json')
  .then(response => response.json())
  .then(data => {
    let div_bullets = document.querySelector("#Reference .bullet");
    for(let i=0;i<data.length;i++){
      let bullet = document.createElement("div");
      div_bullets.appendChild(bullet);
    }
    var bullet = Array.from(div_bullets.children);
    console.log(bullet);
    console.log(bullet);
    let Projects = document.querySelectorAll("#Reference .Realisation .box");
    console.log(data[0]["src"]);
    console.log(Projects);
    console.log(Projects[0].getElementsByTagName("img"));
    
    let currentIndex = 0;
    function ChangeContenu(){
      Projects[0].getElementsByTagName("img")[0].src = data[currentIndex]["src"];
      Projects[0].querySelector('.project-infos').innerHTML = `
          <h2 class="service-titre">
          ${data[currentBIndex]["nom"]}
          </h2>
          <p class="service-informations">
              ${data[currentBIndex]["type"]}
          </p>
      `;
      Projects[1].getElementsByTagName("img")[0].src = data[(currentIndex + 1) % data.length]["src"];
      Projects[1].querySelector('.project-infos').innerHTML = `
          <h2 class="service-titre">
          ${data[(currentIndex + 1) % data.length]["nom"]}
          </h2>
          <p class="service-informations">
              ${data[currentBIndex]["type"]}
          </p>
      `;
      Projects[2].getElementsByTagName("img")[0].src = data[(currentIndex + 2) % data.length]["src"];
      Projects[2].querySelector('.project-infos').innerHTML = `
          <h2 class="service-titre">
          ${data[(currentIndex + 2) % data.length]["nom"]}
          </h2>
          <p class="service-informations">
              ${data[currentBIndex]["type"]}
          </p>
      `;
      currentIndex = (currentIndex + 1) % data.length;  
    }
    setInterval(ChangeContenu, 3000);
    var currentBIndex = 0;

    function changeBulletColor() {
      for (var i = 0; i < bullet.length; i++) {
        bullet[i].style.backgroundColor = "white";
      }

      bullet[currentBIndex].style.backgroundColor = "#2196f3";
      currentBIndex = (currentBIndex + 1) % bullet.length;
}

setInterval(changeBulletColor, 3000);

// Projects.forEach((e)=>{
//   e.addEventListener('mouseover', function() {
//     let description = document.createElement("div");
//     description.className = "project-infos";
//     let id = parseInt(e.dataset.id);
//     description.innerHTML = `
//       <h2 class="service-titre">
//           ${data[id]["nom"]}
//       </h2>
//       <p class="service-informations">
//           ${data[id]["type"]}
//       </p>
//     `;
//     e.appendChild(description);
//   });
//   e.addEventListener('mouseout', function() {
//     let description = e.querySelector('.project-infos');
//     if (description) {
//       description.remove();
//     }
//   });
// });

  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
  });



function create_login_page (){
  let login_form = document.createElement("div");
  login_form.className = "login";
  login_form.style.top = window.pageYOffset+"px";
  login_form.innerHTML = `
  <form action="">
      <div id="login-fermer" class="fermer"><i class="fa-solid fa-xmark"></i></div>
      <div class="error-txt"></div>
      <h3>se connecter</h3>
      <label for="">email</label>
      <input  name="email" type="text">
      <div class="input_err"></div>
      <label for="">pass word</label>
      <input name="pass" type="text">
      <div class="input_err"></div>
      <button>Se connecter</button>
  </form>
  `;
  document.body.style.overflow = "hidden";
  document.body.appendChild(login_form);
  document.getElementById("login-fermer").onclick = ()=>{
    document.body.style.overflow = "scroll";
    login_form.remove();
  };
  const login_form_data = login_form.querySelector("form"),
  login_input = login_form_data.querySelectorAll("input"),
  input_err = login_form_data.querySelectorAll(".input_err"),
  check_user = login_form_data.querySelector("button"),
  form_login_err = login_form_data.querySelector(".error-txt");
  let all_is_ok = true;
  login_input[0].onkeyup = ()=>{
    if(validateEmail(login_input[0].value)){
      input_err[0].textContent = "* Entrer un email valid";
      all_is_ok = false;
    }
    else{
        input_err[0].textContent = "";
        all_is_ok = true;
    }
  };
  login_input[1].onkeyup = ()=>{
    if(login_input[1].value.length<8){
      input_err[1].textContent = "* mot de pass contient au moins 8 caractere";
      all_is_ok = false;
    }
    else{
        input_err[1].textContent = "";
        all_is_ok = true;
    }
  };
  login_form_data.onsubmit = (e)=>{
    e.preventDefault();
  };

  check_user.onclick = ()=>{
    if(all_is_ok){
            
              let xhr = new XMLHttpRequest();
              xhr.open("POST","php_file/login.php",true);
              xhr.onload = ()=>{
                  if(xhr.readyState === XMLHttpRequest.DONE){
                      if(xhr.status === 200){
                          let data = xhr.response;

                          if(data.trim().toLowerCase() === "user"){
                            location.href = "user.php";
                            
                          }
                          else if(data.trim().toLowerCase() === "admin"){
                            location.href = "admin/index.php";
                          }
                          else{
                            form_login_err.textContent = data;
                            form_login_err.style.display = "block";
                          }
                      }
                  }
              };
              let formData = new FormData(login_form_data);
              xhr.send(formData);
            }
            
          
  };
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
      return true;
  }   
  return false;
}
