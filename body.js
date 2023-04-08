


const counters = document.querySelectorAll('.counter');

const countUp = (counter, targetValue, duration) => {
    let startTime = null;
    const startValue = parseInt(counter.textContent) || 0;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentValue = Math.round(startValue + progress * (targetValue - startValue));
        counter.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const duration = parseInt(counter.getAttribute('data-time'));
            const targetValue = parseInt(counter.getAttribute('data-count-upto'));

            countUp(counter, targetValue, duration);
            observer.unobserve(counter);
        }
    });
});

counters.forEach((counter) => observer.observe(counter));



var plane = document.querySelector('.plane')
new ActivateInView(plane)

var company_cards = document.querySelectorAll('.company_card_container')

company_cards.forEach(card =>{
  new ActivateInView(card)
})

var sec6head = document.querySelector('.sec6head');
new ActivateInView(sec6head)