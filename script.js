
var max_width = 1350
var minimum_padding = 10

var navYpadding = 110, navXpadding = (window.innerWidth - max_width)/2
var initialnavXpadding = navXpadding
var navbar = document.querySelector('.navbar')

navXpadding < minimum_padding ? navXpadding = minimum_padding : null
console.log(navXpadding);

document.addEventListener("DOMContentLoaded", ()=>{

    makeBg()

    scrollings()
    
    resizing()
    

    if(window.scrollY > 400) {
        navYpadding = 10
    }
    navYscroll()


    if(window.scrollY < 300) {
        navbar.classList.remove('shadow')
        navbar.style.background = `rgb190, 190, 190, 0)`
    } else if(window.scrollY >= 400) {
        navbar.classList.add('shadow')
        navbar.style.background = `rgb190, 190, 190, 0.5)`
    }





})



function resizing(){
    window.addEventListener('resize', ()=>{

        makeBg()


    })
}






function scrollings(){
    window.addEventListener('scroll', ()=>{


        var scrollY = parseInt(window.scrollY)

        if(scrollY < 400){
            navYpadding = 110 - (scrollY * 0.4)
            navYscroll()
        }

        
        if(scrollY < 300) {
            navbar.classList.remove('shadow')
            navbar.style.background = `rgba(190, 190, 190, 0)`
        } else if(scrollY >=300 && scrollY <= 400){
            navbar.classList.add('shadow')
            navbar.style.background = `rgba(190, 190, 190, ${ (scrollY - 300)/200})`
        } else if(scrollY >=400){
            navbar.style.background = `rgba(190, 190, 190, 0.5)`
        }


    })
}



function makeBg() {
    var bg_section = document.querySelector('.background_section');
    bg_section.style.height = `${window.innerWidth / 2.4}px`
}


function navYscroll(){
    var nav = document.querySelector('.nav')
    nav.style.padding = `${navYpadding < 10 ? 10 : navYpadding}px`
}