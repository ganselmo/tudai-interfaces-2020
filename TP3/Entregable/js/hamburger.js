const menu = document.querySelector('.hamburger');
const options = document.querySelectorAll('.hclicked');

function toggleMenu () {

  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");

}

menu.addEventListener('click', toggleMenu, false);
options.forEach(
    (element)=>{
        element.addEventListener('click', toggleMenu, false);
    }
)

