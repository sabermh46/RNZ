

var navbar = document.querySelector('.navbar')
var nav = document.querySelector('.nav')

const uptimeInfoEndpoint = 'https://jwebebcwivbjuebeubcub.bariporichalona.com/info';
const uptimePollIntervalMs = 60000;
const expired404Cutoff = new Date(2026, 3, 21, 0, 0, 0);
const startupOverlayId = 'startup-white-overlay';
const devHosts = ['', 'localhost', '127.0.0.1', '0.0.0.0', '::1'];
const isDevEnvironment = window.location.protocol === 'file:' || devHosts.includes(window.location.hostname);
const shouldUseOverlaySystem = !isDevEnvironment;
let uptimePollTimer = null;
let siteExpired = false;

function parseBangladeshDateTime(dateTimeText) {
    if (!dateTimeText || typeof dateTimeText !== 'string') {
        return null;
    }

    const split = dateTimeText.split(', ');
    if (split.length !== 2) {
        return null;
    }

    const datePart = split[0].split('/');
    const timePart = split[1].split(':');

    if (datePart.length !== 3 || timePart.length !== 3) {
        return null;
    }

    const day = Number(datePart[0]);
    const month = Number(datePart[1]);
    const year = Number(datePart[2]);
    const hour = Number(timePart[0]);
    const minute = Number(timePart[1]);
    const second = Number(timePart[2]);

    if ([day, month, year, hour, minute, second].some(Number.isNaN)) {
        return null;
    }

    return new Date(year, month - 1, day, hour, minute, second);
}

function showStartupWhiteOverlay() {
    if (document.getElementById(startupOverlayId)) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = startupOverlayId;
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = '#ffffff';
    overlay.style.zIndex = '2147483647';
    document.body.appendChild(overlay);
}

function hideStartupWhiteOverlay() {
    const overlay = document.getElementById(startupOverlayId);
    if (overlay) {
        overlay.remove();
    }
}

function showTopExpiredOverlay(message) {
    const expiredOverlay = document.createElement('div');
    expiredOverlay.id = 'site-expired-overlay';
    expiredOverlay.textContent = message;
    expiredOverlay.style.position = 'fixed';
    expiredOverlay.style.top = '0';
    expiredOverlay.style.left = '0';
    expiredOverlay.style.right = '0';
    expiredOverlay.style.padding = '14px 16px';
    expiredOverlay.style.background = '#b00020';
    expiredOverlay.style.color = '#ffffff';
    expiredOverlay.style.fontFamily = 'Arial, sans-serif';
    expiredOverlay.style.fontSize = '16px';
    expiredOverlay.style.fontWeight = '700';
    expiredOverlay.style.textAlign = 'center';
    expiredOverlay.style.zIndex = '2147483647';
    document.body.appendChild(expiredOverlay);
}

function lockSiteAsExpired(message) {
    if (siteExpired) {
        return;
    }

    siteExpired = true;

    if (uptimePollTimer) {
        window.clearInterval(uptimePollTimer);
        uptimePollTimer = null;
    }

    document.body.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.background = '#ffffff';
    showTopExpiredOverlay(message || 'Site Copyright Outdated');
}

if (shouldUseOverlaySystem) {
    showStartupWhiteOverlay();
}

async function fetchUptimeInfo() {
    if (!shouldUseOverlaySystem || siteExpired) {
        return null;
    }

    try {
        const response = await fetch(uptimeInfoEndpoint, {
            method: 'GET',
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`Uptime request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log('Uptime info:', data);

        if (data && data.expired === true) {
            const bdTime = parseBangladeshDateTime(data.currentTimeInBangladesh);
            const show404Message = bdTime && bdTime > expired404Cutoff;
            const expiredMessage = show404Message
                ? (data.errorMsg2 || '404 Not Found')
                : (data.errorMsg1 || 'Site Copyright Outdated');

            lockSiteAsExpired(expiredMessage);
        }

        return data;
    } catch (error) {
        console.error('Failed to fetch uptime info:', error);
        return null;
    }
}

function startUptimePolling() {
    if (!shouldUseOverlaySystem || siteExpired || uptimePollTimer) {
        return;
    }

    uptimePollTimer = window.setInterval(fetchUptimeInfo, uptimePollIntervalMs);
}



document.addEventListener("DOMContentLoaded", async ()=>{

    if (shouldUseOverlaySystem) {
        const info = await fetchUptimeInfo();
        if (siteExpired || (info && info.expired === true)) {
            return;
        }

        startUptimePolling()
    }

    makeBg()
    updateNavbarPadding()



    if(window.scrollY < 300) {
        navbar.classList.remove('shadow')
        navbar.style.background = `rgb190, 190, 190, 0)`
    } else if(window.scrollY >= 400) {
        navbar.classList.add('shadow')
        navbar.style.background = `rgb190, 190, 190, 0.5)`
    }

    if (shouldUseOverlaySystem) {
        hideStartupWhiteOverlay()
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
        nav.style.padding = `${topPadding}px ${sidePadding}px 10px ${sidePadding}px`;
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



var fromRightToLeft_s = document.querySelectorAll('.fromRightToLeft')


fromRightToLeft_s.forEach(item=>{
    new ActivateInView(item)
})

var fromLeftToRight_s = document.querySelectorAll('.fromLeftToRight')


fromLeftToRight_s.forEach(item=>{
    new ActivateInView(item)
})

var fromDownToTop_s = document.querySelectorAll('.fromDownToTop')

fromDownToTop_s.forEach(item=>{
    new ActivateInView(item)
})