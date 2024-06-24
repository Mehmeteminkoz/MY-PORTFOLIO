document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navlogo = document.querySelector(".navlogo");
    const navbarbox = document.querySelector(".navbarbox");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navlogo.classList.add("scrolled");
            navbarbox.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
            navlogo.classList.remove("scrolled");
            navbarbox.classList.remove("scrolled");
        }
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar .navbarbox a");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + 150; // Adjusted for smooth activation
        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    let activeLink = document.querySelector(`.navbar .navbarbox a[href*=${sectionId}]`);
                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                });
            }
        });
    });
});

