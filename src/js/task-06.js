const inVal= document.querySelector('#validation-input');
console.log(inVal);
const onInValBlur =(event)=>{
    if (inVal.value.length === Number(inVal.getAttribute('data-length'))){
     inVal.classList.add('valid') 
     inVal.classList.remove('invalid')  
    } else {inVal.classList.add('invalid')
    inVal.classList.remove('valid')  }
    console.log(inVal.value.length)
    console.log(inVal.getAttribute('data-length'))
}
inVal.addEventListener('blur',onInValBlur)