
var max_width = 1350
var minimum_padding = 10

var navYpadding = 110, navXpadding = (window.innerWidth - max_width)/2
var initialnavXpadding = navXpadding
var navbar = document.querySelector('.navbar')

navXpadding < minimum_padding ? navXpadding = minimum_padding : null
console.log(navXpadding);

var nav = document.querySelector('.nav')


document.addEventListener("DOMContentLoaded", ()=>{

    makeBg()

    scrollings()
    
    resizing()

    


    

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

        navYpadding = 110 - (scrollY * 0.4)
        navYscroll()

        
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
    var scrollPosition = window.scrollY
    if(scrollPosition < 400) {
        nav.style.padding = `${navYpadding < 10 ? 10 : navYpadding}px`
        console.log( navYpadding,'navYscroll called');
    } else {
        nav.style.padding = '10px'
    }
    

    
}

window.addEventListener("beforeunload", function() {
    // Get the current scroll position
    var scrollPosition = window.scrollY;
  
    // Save the scroll position to local storage
    localStorage.setItem("scrollPosition", scrollPosition);
  });
  
  // Get the saved scroll position from local storage
  var savedScrollPosition = localStorage.getItem("scrollPosition");
  
  // If there is a saved scroll position, scroll to it
  if (savedScrollPosition !== null) {
    window.scrollTo(0, savedScrollPosition);
  }