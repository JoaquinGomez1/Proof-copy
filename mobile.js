const hamburgerMenu = document.querySelector('.hamburgerMenu')

hamburgerMenu.addEventListener('click', showSidebarMenu)

function showSidebarMenu(){
    const sidebar = document.querySelector('.sidebar')

    if(sidebar.style.display == 'flex'){
        return sidebar.style.display = 'none'
    }
    sidebar.style.display = 'flex'

        // Closing sidebar section
    window.addEventListener('click',(event)=>{
        if(event.target == sidebar){
            sidebar.style.display = 'none'
        }
    })

    window.addEventListener('keydown', (event)=>{
        if(event.key == 'Escape'){
            sidebar.style.display = 'none'
        }
    })
}