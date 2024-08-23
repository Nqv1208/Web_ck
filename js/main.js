
document.addEventListener("DOMContentLoaded", function() {
    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("back-top").style.display = "block";
        } else {
            document.getElementById("back-top").style.display = "none";
        }
    }

    document.getElementById('back-top').addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    function scrollFunction2() {
        var header = document.getElementById('header');
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            header.classList.add('no-top');
            header.classList.remove('top');
        } else {
            header.classList.add('top');
            header.classList.remove('no-top');
        }
    }

    window.onscroll = function() {
        scrollFunction();
        scrollFunction2();
    };

    const elements = document.querySelectorAll('.service-single, .featured-cars-single');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});

