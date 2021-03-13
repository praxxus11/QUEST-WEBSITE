// for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > window.innerHeight-40) {
        document.getElementById("scrollUp").style.display = 'inline-block';
    }
    if (scroll <= window.innerHeight-40) {
        document.getElementById("scrollUp").style.display = 'none';
    }

    if (scroll > 2*window.innerHeight-200) {
        document.getElementById("page3").style.backgroundColor = 'black';
        document.querySelectorAll(".injusticePara").forEach(function(para) {
            para.style.color = 'white';
        });
    }
    else {
        document.getElementById("page3").style.backgroundColor = 'white';
        document.querySelectorAll(".injusticePara").forEach(function(para) {
            para.style.color = 'black';
        });
    }
});
