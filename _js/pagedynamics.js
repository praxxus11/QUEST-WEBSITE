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
});
