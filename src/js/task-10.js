function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate=document.querySelector('[data-create]');
const btnDestroy=document.querySelector('[data-destroy]')
const inpAmount=document.querySelector('input')
console.log(inpAmount)
inpAmount.addEventListener('input',(event)=>{
 const amount=event.currentTarget.value
  console.log(amount)
  return amount
})

console.log(amount)
// function createBoxes(amount){
//   const box = document.createElement("div");
//   box.classList.add('boxes')
//   box.style.height='30px';
//   box.style.width='30px'
//   box.style.color=getRandomHexColor()
// }
// btnCreate.addEventListener('click',createBoxes)
// console.log(box)