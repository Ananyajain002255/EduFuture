console.log("EduFuture Loaded Successfully!");

// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 2000);

    }

});

// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// ==========================
// NAVBAR SCROLL
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    } else {

        navbar.style.background = "rgba(255,255,255,.15)";
        navbar.style.boxShadow = "none";

    }

});

// ==========================
// TYPING EFFECT
// ==========================

const typing = document.getElementById("typing");

if (typing) {

    const words = [

        "Quality Education",

        "Digital Learning",

        "AI Learning",

        "Future Skills"

    ];

    let wordIndex = 0;
    let charIndex = 0;

    function typeWord() {

        if (charIndex < words[wordIndex].length) {

            typing.textContent += words[wordIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeWord, 100);

        } else {

            setTimeout(deleteWord, 1500);

        }

    }

    function deleteWord() {

        if (charIndex > 0) {

            typing.textContent = words[wordIndex].substring(0, charIndex - 1);

            charIndex--;

            setTimeout(deleteWord, 50);

        } else {

            wordIndex = (wordIndex + 1) % words.length;

            setTimeout(typeWord, 300);

        }

    }

    typeWord();

}

// ==========================
// COUNTER
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;

    let count = 0;

    function updateCounter() {

        const increment = target / 150;

        count += increment;

        if (count < target) {

            counter.innerText = Math.ceil(count).toLocaleString();

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target.toLocaleString() + "+";

        }

    }

    updateCounter();

});

// ==========================
// CHARTS
// ==========================

if (typeof Chart !== "undefined") {

    const literacyCanvas = document.getElementById("literacyChart");

    if (literacyCanvas) {

        new Chart(literacyCanvas, {

            type: "doughnut",

            data: {

                labels: ["Literate", "Remaining"],

                datasets: [{

                    data: [77.7, 22.3],

                    backgroundColor: [

                        "#2563eb",

                        "#dbeafe"

                    ]

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        position: "bottom"

                    }

                }

            }

        });

    }

    const enrollmentCanvas = document.getElementById("enrollmentChart");

    if (enrollmentCanvas) {

        new Chart(enrollmentCanvas, {

            type: "bar",

            data: {

                labels: [

                    "Primary",

                    "Secondary",

                    "Higher"

                ],

                datasets: [{

                    label: "Enrollment %",

                    data: [

                        95,

                        81,

                        62

                    ],

                    backgroundColor: [

                        "#2563eb",

                        "#3b82f6",

                        "#60a5fa"

                    ]

                }]

            },

            options: {

                responsive: true,

                scales: {

                    y: {

                        beginAtZero: true,

                        max: 100

                    }

                }

            }

        });

    }

}

// ==========================
// SDG CIRCLES
// ==========================

const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

    const percent = circle.dataset.percent;

    const progress = circle.querySelector(".progress");

    const radius = 60;

    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    progress.style.strokeDashoffset =
        circumference - (percent / 100) * circumference;

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});

// ==========================
// BACK TO TOP
// ==========================

const backTop = document.getElementById("backToTop");

if (backTop) {

    backTop.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================
// CURSOR GLOW
// ==========================

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

}
