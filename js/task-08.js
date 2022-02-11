
const form= document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit',onFormSubmit);
function onFormSubmit(e){
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    if(email === ""|| password ===""){ 
        return alert("Please fill in all the fields!");};
    const formData ={
        email,
        password,
    };
    console.log(formData);
    
e.currentTarget.reset(); 
}