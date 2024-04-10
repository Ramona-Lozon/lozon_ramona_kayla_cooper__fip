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

// hover over index product panels
document.addEventListener("DOMContentLoaded", function() {
    const productPanels = document.querySelectorAll(".index_product_panel");
    const productTitles = document.querySelectorAll(".index_product_title");

    productPanels.forEach(panel => {
        panel.addEventListener("mouseenter", function() {
            panel.querySelector(".index_product_title").classList.add("hover-activate");
        });

        panel.addEventListener("mouseleave", function() {
            panel.querySelector(".index_product_title").classList.remove("hover-activate");
        });
    });
});
