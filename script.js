let select_div = document.querySelectorAll(".div");
console.log(select_div);

let Allselect_div = [];
for (let i=0; i < select_div.length; i++) {
    Allselect_div.push(select_div[i].classList[2]);
}

function random() {
    const rand = document.querySelector(".rand");
    const rando = document.querySelector(".ind");
    let choices = ['white', 'black', 'red', 'green', 'yellow', 'magenta', 'purple', 'blue']
    for (let i=0; i < select_div.length; i++) {
        let randomColor = Math.floor(Math.random() * 8);
        select_div[i].classList.remove(select_div[i].classList[2]);
        select_div[i].classList.add(choices[randomColor]);
        rand.addEventListener("click", () => {
            rando.classList.toggle("active");
        });
    }
}

function reset() {
    const res = document.querySelector(".res");
    const rest = document.querySelector(".ind");
    for (let i=0; i < select_div.length; i++) {
        select_div[i].classList.remove(select_div[i].classList[2]);
        select_div[i].classList.add(Allselect_div[i]);
        res.addEventListener("click", () => {
            rest.classList.toggle("inactive");
        });
    }
}