const menu = document.querySelector('.hamburger');
const options = document.querySelectorAll('.hclicked');

function toggleMenu () {


  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  document.querySelector('.hamburger').classList.toggle("is-active");
}

menu.addEventListener('click', toggleMenu, false);
options.forEach(
    (element)=>{
        element.addEventListener('click', toggleMenu, false);
        
    }
)

