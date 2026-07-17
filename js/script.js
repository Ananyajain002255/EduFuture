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

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    }

    else{

        navbar.style.background = "rgba(255,255,255,.15)";
        navbar.style.boxShadow = "none";

    }

});

const words = [
    "Quality Education",
    "Digital Learning",
    "AI Learning",
    "Future Skills"
];

let wordIndex = 0;
let charIndex = 0;
let typing = document.getElementById("typing");

function typeWord(){

    if(charIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWord,100);

    }else{

        setTimeout(deleteWord,1800);

    }

}

function deleteWord(){

    if(charIndex > 0){

        typing.textContent = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteWord,60);

    }else{

        wordIndex = (wordIndex+1)%words.length;

        setTimeout(typeWord,300);

    }

}

typeWord();

// Literacy Chart

new Chart(document.getElementById("literacyChart"),{

    type:"doughnut",

    data:{

        labels:["Literate","Remaining"],

        datasets:[{

            data:[77.7,22.3],

            backgroundColor:[
                "#2563eb",
                "#dbeafe"
            ]

        }]

    },

    options:{

        plugins:{
            legend:{
                position:"bottom"
            }
        }

    }

});


// Enrollment Chart

new Chart(document.getElementById("enrollmentChart"),{

    type:"bar",

    data:{

        labels:[
            "Primary",
            "Secondary",
            "Higher"
        ],

        datasets:[{

            label:"Enrollment %",

            data:[
                95,
                81,
                62
            ],

            backgroundColor:[
                "#2563eb",
                "#3b82f6",
                "#60a5fa"
            ]

        }]

    },

    options:{

        responsive:true,

        scales:{

            y:{
                beginAtZero:true,
                max:100
            }

        }

    }

});
