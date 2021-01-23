const drop = document.querySelector('.dropdown');
const links = document.querySelector('.dropdownmenu');

drop.addEventListener("click",() =>{
    links.classList.toggle("active");

})