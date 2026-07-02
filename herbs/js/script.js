/*=========================================
        Ayurveda Assistant
        JavaScript
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=====================================
            MOBILE MENU
    =====================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            });

        });

    }

    /*=====================================
            SEARCH HERBS
    =====================================*/

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".herb-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            cards.forEach(card => {

                let text = card.innerText.toLowerCase();

                if (text.includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    /*=====================================
            STICKY HEADER
    =====================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.05)";

        }

    });

    /*=====================================
            BACK TO TOP BUTTON
    =====================================*/

    const topBtn = document.createElement("div");

    topBtn.className = "back-to-top";

    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.style.display = "none";

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=====================================
            CARD ANIMATION
    =====================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

            }

        });

    }, {

        threshold: 0.2

    });

    cards.forEach(card => {

        observer.observe(card);

    });

    /*=====================================
            READ MORE BUTTON
    =====================================*/

    document.querySelectorAll(".read-more").forEach(button => {

        button.addEventListener("click", function () {

            const herb = this.parentElement.querySelector("h3").innerText;

            alert(
                herb +
                "\n\nDetailed information can be added here.\n\nYou may redirect to a dedicated herb page or open a modal."
            );

        });

    });

    /*=====================================
            LAZY LOADING IMAGES
    =====================================*/

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        img.setAttribute("loading", "lazy");

    });

    /*=====================================
            ACTIVE NAVIGATION
    =====================================*/

    const current = location.pathname.split("/").pop();

    document.querySelectorAll(".navbar a").forEach(link => {

        if (link.getAttribute("href") === current) {

            link.classList.add("active");

        }

    });

});