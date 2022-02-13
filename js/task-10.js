function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate=document.querySelector('[data-create]');
const btnDestroy=document.querySelector('[data-destroy]');
const inpAmount=document.querySelector('input');
const boxDiv=document.querySelector('#boxes');

const getAmount =()=>{
  const amount = inpAmount.value;
  createBoxes(amount);
}
btnCreate.addEventListener('click', getAmount);
btnDestroy.addEventListener('click',destroyBoxes);
function createBoxes(amount){
  const boxesColor=[];
  for (let i = 0; i < amount;i+=1){ 
  const box = document.createElement('div');
  let size = `${30 + (i*10)}px`
  box.classList.add('boxes');
  box.style.height =size;
  box.style.width =size;
  box.style.marginLeft = `${i*10}px`
  box.style.backgroundColor=getRandomHexColor();
  box.style.display='block';
  console.log(box.style.height)
boxesColor.push(box)};
console.dir(boxesColor);
boxDiv.append(...boxesColor);
}
function destroyBoxes(){
 boxDiv.innerHTML ='';
 inpAmount.value = ''; 
}


