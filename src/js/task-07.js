const formInput=document.querySelector('#font-size-control');
const formSpan=document.querySelector('#text');


const onformInputInput=(event)=>{
    console.log(formSpan)
    console.log(event.currentTarget.value)
 
    formSpan.style.fontSize=`${event.currentTarget.value}px`
};
formInput.addEventListener('input',onformInputInput)