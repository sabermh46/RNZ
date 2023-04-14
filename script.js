

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
    bg_section.style.height = `${Math.max(350, window.innerWidth / 2.4)}px`
}


function updateNavbarPadding() {
    const displayWidth = window.innerWidth;
    const scrollPosition = window.scrollY;
  
    if (displayWidth > 1020) {
        const sidePadding = scrollPosition >= 400 ? 10 : Math.max(10, ((400 - scrollPosition) * 0.25));
        const topPadding = scrollPosition >= 400 ? 10 : 10 + (400 - scrollPosition) * 0.25;
        padding = `${topPadding}px ${sidePadding}px 10px ${sidePadding}px`;
      } else if (displayWidth < 500){
        var bg_section = document.querySelector('.background_section').getBoundingClientRect().width;
        nav.style.width = bg_section + 'px'
        nav.style.padding = '10px';
      }
      else {
        nav.style.padding = '10px';
      }
  }


// window.addEventListener("beforeunload", function() {
//     var scrollPosition = window.scrollY;
//     localStorage.setItem("scrollPosition", scrollPosition);
//   });
  
  // var savedScrollPosition = localStorage.getItem("scrollPosition");
  
  // if (savedScrollPosition !== null) {
  //   window.scrollTo(0, savedScrollPosition);
  // }


  var links = document.querySelector('.navbar .links')

  var burger_menu = document.querySelector('.menu')
  burger_menu.addEventListener('click', ()=>{
    burger_menu.classList.toggle('active')
    links.classList.toggle('active')
  })



  class ActivateInView {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.onInView(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(this.element);
    }

    onInView(element) {
        element.classList.add('active');
    }
}



var bg_sec = document.querySelector('.background_section')

new ActivateInView(bg_sec)






const loader = document.getElementById('loader');
const progressBar = document.getElementById('progress-bar');
const percentage = document.getElementById('percentage');
const images = document.querySelectorAll('img');
let imagesLoaded = 0;

function updateProgressBar() {
  const progress = (imagesLoaded / images.length) * 100;
  progressBar.style.width = `${progress}%`;
  percentage.textContent = `${Math.round(progress)}%`;

  if (imagesLoaded === images.length) {
    loader.style.display = 'none';
  }
}

images.forEach((img) => {
  const tempImage = new Image();
  tempImage.src = img.src;

  tempImage.addEventListener('load', () => {
    imagesLoaded++;
    updateProgressBar();
  });

  tempImage.addEventListener('error', () => {
    imagesLoaded++;
    updateProgressBar();
  });
});


