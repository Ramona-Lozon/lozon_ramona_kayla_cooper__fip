function scrollTrigger(selector) {
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el);
    });
}

function addObserver(el) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
                console.log(entry.target.id + " deactivated"); // Log the deactivation
            }
        });
    }, { rootMargin: '-50px 0px -50px 0px' }); // Adjust the rootMargin here
    observer.observe(el);
}

scrollTrigger('.scroll-activate');
