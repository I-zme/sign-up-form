const pwdToggleBtns = document.querySelectorAll('.pwd-visibility-btn');

pwdToggleBtns.forEach(button=>{
    button.addEventListener('click',()=>{
        let input = button.previousElementSibling;
        console.log(input.getAttribute('type'))
        input.getAttribute('type')==="password" ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
    })
})


const pwdInput = document.querySelector('#pwd');
const pwdConfirmInput = document.querySelector('#confirm-pwd');

pwdConfirmInput.addEventListener('blur',()=>{
    displayValidity(pwdConfirmInput, pwdConfirmInput.value===pwdInput.value)
})



const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const mail = document.querySelector('#email');

[fName, lName, mail].forEach(input=>{
    input.addEventListener('blur',()=>{
        displayValidity(input,input.checkValidity())
    })
});



function displayValidity(input, callback){
    if(callback){
        input.setAttribute('data-valid', "true");
        input.setAttribute('aria-label', 'valid')
    }
    else{
        input.setAttribute('data-valid', "false");
        input.setAttribute('aria-label', 'invalid')
    }
}