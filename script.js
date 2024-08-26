const side = document.querySelector(".sideIcon");
const contents = document.querySelectorAll(".content a");
const text = document.querySelectorAll(".text");
const divs = document.querySelectorAll(".divs");
const tags = document.querySelectorAll('.content .text');


side.onclick = () => {
    if (contents) {
        contents.forEach((link) => {
            link.classList.toggle("active");
        });
    }

    divs.forEach(div => {
        div.style.display = 'none';
        div.style.backgroundColor = 'darkgray';
        div.style.color = 'black';
        

    });

        tags.forEach((tags, index) => {
        tags.addEventListener('mouseover', () => {
            divs.forEach(div => div.style.display = 'none');
            divs[index].style.display = 'block';
            
    });

        tags.addEventListener('mouseout', () => {
            divs[index].style.display = 'none';
    });
});
};                          