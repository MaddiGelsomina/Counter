let container = document.createElement("div");
container.setAttribute("class","container");

let pCounter = document.createElement("p");
pCounter.setAttribute("id","counter");
pCounter.setAttribute("class","counter");

let buttonsContainer = document.createElement("div");
buttonsContainer.setAttribute("class","buttons-container");

document.body.appendChild(container);
container.appendChild(pCounter);
container.appendChild(buttonsContainer);

let btnPlus = document.createElement("button");
btnPlus.innerHTML= "+";
btnPlus.setAttribute("id","increment-btn");
btnPlus.setAttribute("class","counter-plus button");

let btnMinus = document.createElement("button");
btnMinus.innerHTML= "-";
btnMinus.setAttribute("id","decrement-btn");
btnMinus.setAttribute("class", "counter-minus button");

buttonsContainer.appendChild(btnPlus);
buttonsContainer.appendChild(btnMinus);

let counter = document.getElementById("counter");

let buttonPlus = document.getElementById("increment-btn");
let buttonMinus = document.getElementById("decrement-btn");

let count = 0;

counter.innerHTML = count;

buttonPlus.addEventListener("click", increment);
buttonMinus.addEventListener("click", decrement);

function increment(){
    count++;
    counter.innerHTML = count
};

function decrement(){
    if(count<=0){
        count == 0;
    }else{
    count--;
    }
    counter.innerHTML = count
};


