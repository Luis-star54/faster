const iconMenu = document.querySelector('#icon-menu')
const listMenu = document.querySelector('#list-menu')

iconMenu.addEventListener('click' ,(e) =>{
    // alterar estilo para el menu y body 
        
    listMenu.classList.toggle('active');
    document.body.classList.toggle('opacity')
})