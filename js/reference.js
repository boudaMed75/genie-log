let nous_project = document.getElementById("gl-project");
let les_type = document.querySelectorAll(".references .references-header ul li:not(#tous)");
let tous_les_project = document.getElementById("tous");
console.log(les_type);
var project;
fetch('../js/project.json')
  .then(response => response.json())
  .then(data => {
    tous_les_project.onclick = ()=>{
        nous_project.innerHTML="";
        for (let i = 0; i < data.length; i++) {
                var box_project = document.createElement("a");
                box_project.classList = "box";
                box_project.href="";
                box_project.innerHTML = `
                    <img src="../${data[i]["src"]}" alt="">
                    <div class="project-infos">
                        <h2 class="service-titre">
                        ${data[i]["nom"]}
                        </h2>
                        <p class="service-informations">
                            ${data[i]["type"]}
                        </p>
                    </div>
                `;
                nous_project.appendChild(box_project);
        }
    };
    les_type.forEach((e)=>{
        e.onclick = ()=>{
            nous_project.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                if(data[i]["type"]===e.textContent){
                    var box_project = document.createElement("a");
                    box_project.classList = "box";
                    box_project.href="";
                    box_project.innerHTML = `
                        <img src="../${data[i]["src"]}" alt="">
                        <div class="project-infos">
                            <h2 class="service-titre">
                            ${data[i]["nom"]}
                            </h2>
                            <p class="service-informations">
                                ${data[i]["type"]}
                            </p>
                        </div>
                    `;
                    nous_project.appendChild(box_project);
                }
            }
        };
    });
  })
  .catch(error => {
    console.error('An error occurred while fetching the JSON file:', error);
  });
 console.log(project);