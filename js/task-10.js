function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate=document.querySelector('[data-create]');
const btnDestroy=document.querySelector('[data-destroy]')
const inpAmount=document.querySelector('input');
const boxDiv=document.querySelector('#boxes')
console.log(inpAmount)
inpAmount.addEventListener('input',(e)=>{
 

const amount = inpAmount.value;
  

})
console.log(amount)

function createBoxes(amount){
  const boxesColor=[];
  for (let i = 0; i < amount;i+=1){ 
  const box = document.createElement('div');
  box.classList.add('boxes');
  box.style.height=`30px+${i*10}`;
  box.style.width=`30px+${i*10}`;
  box.style.color=getRandomHexColor();
boxesColor.push(box)}
console.dir(boxesColor)
return boxesColor

}
createBoxes(amount)
// boxDiv.append(...boxesColor)
btnCreate.addEventListener('click',createBoxes())
