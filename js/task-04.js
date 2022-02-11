let counterValue = 0;
const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const onBtnDecrClick = () => {
   counterValue -= 1; 
    value.textContent = counterValue;
   };
   const onBtnIncrClick = () => {
      counterValue += 1; 
       value.textContent = counterValue;
      };

btnDecr.addEventListener('click', onBtnDecrClick );
btnIncr.addEventListener("click", onBtnIncrClick);




