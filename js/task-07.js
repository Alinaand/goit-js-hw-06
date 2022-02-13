const formInput=document.querySelector('#font-size-control');
const formSpan=document.querySelector('#text');
const onformInputInput=(event)=>{
    formSpan.style.fontSize=`${formInput.value}px`  
console.log(event.currentTarget.value)
console.log(formSpan.style.fontSize)};
formInput.addEventListener('input',onformInputInput)