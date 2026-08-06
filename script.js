const toggle = document.getElementById("theme-toggle");

toggle.onclick = function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

};

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark-mode");

    toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}
const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".navbar");

menu.onclick=function(){

nav.classList.toggle("active");

};