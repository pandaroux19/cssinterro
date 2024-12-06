import Alpine from "alpinejs";
import Recettes from './../../src/js/components/Recettes';  
window.alpine = Alpine;



document.addEventListener('alpine:init', () => {
  Alpine.data('Recettes', Recettes); 
});


Alpine.start();