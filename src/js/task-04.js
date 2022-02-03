let counterValue = 0;
const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const onBtnClick = (num) => {
   counterValue += num; 
    value.textContent = counterValue;
   };
btnDecr.addEventListener("click",()=> onBtnClick (-1));
btnIncr.addEventListener("click",() => onBtnClick (+1));




