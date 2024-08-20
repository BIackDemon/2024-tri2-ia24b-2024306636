//seleciona uma lista com todos os buttons com a classe toggle-nav
const btsToggleNav = document.querySelectorAll('button.toggle-nav')
//seleciona um nav
const nv = document.querySelector('nav')
//para cada(ForEach) bts(button), cada bt para cada tera a funçãoi com o nome bt adicina a bt uma evento ao clicar da a função abrir ou fechar a toggle
btsToggleNav.forEach(function(bt){
  bt.addEventListener('click', function(){
    nv.classList.toggle('open')
  })
})