const inVal= document.querySelector('#validation-input');
console.log(inVal);
const onInValBlur =(event)=>{
    if (event.currentTarget.value.length === Number(inVal.dataset.length)) {
     inVal.classList.add('valid') 
     inVal.classList.remove('invalid')  
    } else {inVal.classList.add('invalid')
    inVal.classList.remove('valid')  };
    console.log(Number(inVal.dataset.length))
}
    
inVal.addEventListener('blur',onInValBlur)