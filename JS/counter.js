let counter = document.querySelector('.counter');
let counterPlus = document.querySelector('.counter-plus');
let counterMinus = document.querySelector('.counter-minus');

let count = 0;

changeCounter();

counterPlus.addEventListener("click", () => {
    count++;
    changeCounter();
});

counterMinus.addEventListener("click", () => {
    if(count > 0){
        count--;
    }else if(count = 0){
        count = 0;
    }
    changeCounter();
});

function changeCounter(){
    counter.innerHTML = count;
};