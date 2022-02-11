const formInput=document.querySelector('#font-size-control');
const formSpan=document.querySelector('#text');


const onformInputInput=(event)=>{

    formSpan.style.fontSize=`${event.currentTarget.value}px`
};
formInput.addEventListener('input',onformInputInput)