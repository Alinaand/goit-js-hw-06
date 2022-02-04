const inpName= document.querySelector('#name-input');
const outName= document.querySelector('#name-output');
console.log(inpName)
const onInpNameInput=(event) =>{
inpName.value === ""
?(outName.textContent="Anonymous")
:(outName.textContent=event.currentTarget.value);
}
inpName.addEventListener('input', onInpNameInput)
