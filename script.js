window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop + section.offsetHeight / 2) {
            section.classList.add('visible');
        }
    });
});
