//@ts-check
document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function DOMContentLoaded(){
    const sections = document.querySelectorAll("section");
    const parent = document.querySelector(".parent");
    const options = {
        root: parent,
        rootMargin: "-50% 0px",
        threshold: 0
    };
    const observer = new IntersectionObserver(intersect, options);
    sections.forEach(section => {
        observer.observe(section);
    });
}

function intersect(entries) {
    const cls = "intersect";
    entries.forEach(entry => {
        if ( entry.isIntersecting ){
            const old = document.querySelector(`.${cls}`);
            if ( old ) {
                old.classList.remove(cls);
            }
            entry.target.classList.add(cls);
        }
    });
}