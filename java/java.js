function alternarTema() {

    document.body.classList.toggle("dark-mode");

    let icone = document.getElementById("iconeTema");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("tema", "dark");
        icone.src = "./assets/sun.svg";

    } else {

        localStorage.setItem("tema", "light");
        icone.src = "./assets/moon.svg";

    }

}

window.onload = function(){

    let tema = localStorage.getItem("tema");
    let icone = document.getElementById("iconeTema");

    if(tema === "dark"){

        document.body.classList.add("dark-mode");

        if(icone){

            if(window.location.pathname.includes("/pages/")){
                icone.src = "../assets/sun.svg";
            }else{
                icone.src = "./assets/sun.svg";
            }

        }
    }

}

function alternarTemaPG() {

    document.body.classList.toggle("dark-mode");

    let icone = document.getElementById("iconeTema");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("tema", "dark");
        icone.src = "../assets/sun.svg";

    } else {

        localStorage.setItem("tema", "light");
        icone.src = "../assets/moon.svg";

    }

}