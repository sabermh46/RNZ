
var max_width = 1200
var minimum_padding = 10

var navbar = document.querySelector('.navbar')


var nav = document.querySelector('.nav')


document.addEventListener("DOMContentLoaded", ()=>{

    makeBg()
    updateNavbarPadding()



    if(window.scrollY < 300) {
        navbar.classList.remove('shadow')
        navbar.style.background = `rgb190, 190, 190, 0)`
    } else if(window.scrollY >= 400) {
        navbar.classList.add('shadow')
        navbar.style.background = `rgb190, 190, 190, 0.5)`
    }





})



window.addEventListener('resize', ()=>{

    makeBg()
    updateNavbarPadding()


})






    window.addEventListener('scroll', ()=>{


        var scrollY = parseInt(window.scrollY)
        
        if(scrollY < 300) {
            navbar.classList.remove('shadow')
            navbar.style.background = `rgba(190, 190, 190, 0)`
        } else if(scrollY >=300 && scrollY <= 400){
            navbar.classList.add('shadow')
            navbar.style.background = `rgba(190, 190, 190, ${ (scrollY - 300)/200})`
        } else if(scrollY >=400){
            navbar.style.background = `rgba(190, 190, 190, 0.5)`
        }


        updateNavbarPadding()

    })



function makeBg() {
    var bg_section = document.querySelector('.background_section');
    bg_section.style.height = `${window.innerWidth / 2.4}px`
}


function updateNavbarPadding() {
    const displayWidth = window.innerWidth;
    const scrollPosition = window.scrollY;
  
    if (displayWidth > 1020) {
        const sidePadding = scrollPosition >= 400 ? 10 : Math.max(10, ((400 - scrollPosition) * 0.25));
        const topPadding = scrollPosition >= 400 ? 10 : 10 + (400 - scrollPosition) * 0.25;
        nav.style.padding = `${topPadding}px ${sidePadding}px 10px ${sidePadding}px`;
      } else {
        nav.style.padding = '10px';
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