console.log("EduFuture Loaded Successfully!");
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

/* Animated Counter */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 150;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,15);

        }

        else{

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    updateCounter();

});
