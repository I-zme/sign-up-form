const pwdToggleBtns = document.querySelectorAll('.pwd-visibility-btn');

pwdToggleBtns.forEach(button=>{
    button.addEventListener('click',()=>{
        let input = button.previousElementSibling;
        input.getAttribute('type')==="password" ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
    })
})


const pwdInput = document.querySelector('#pwd');
const pwdConfirmInput = document.querySelector('#confirm-pwd');

pwdInput.addEventListener('input', ()=>{
    let pwdValue = pwdInput.value;

    const upCase = document.getElementById('upcase');
    testReg(pwdValue, /[A-Z]/g, upCase);
    const lowCase = document.getElementById('lowcase');
    testReg(pwdValue, /[a-z]/g, lowCase);
    const numeric = document.getElementById('numeric');
    testReg(pwdValue, /\d/g, numeric);
    const charNum = document.getElementById('charnum');
    testReg(pwdValue, /^.{8,15}$/, charNum);
    const symb = document.getElementById('symb');
    testReg(pwdValue, /[!"#\$%\\&'\(\)\*\+,-\.\/\:\;<=>\?@\[\]\^_`\{|\}~]/g, symb);
});


pwdInput.addEventListener('blur',()=>{
    displayValidity(pwdInput, [...document.querySelectorAll('.pwd-item')].every(item=>item.hasAttribute('data-correct')));
})

function testReg(val, reg, instruction){ 
    if(reg.test(val)){
        if(!instruction.hasAttribute('data-correct')){
            instruction.toggleAttribute('data-correct')
        }
    }
    else if(instruction.hasAttribute('data-correct')){
        instruction.toggleAttribute('data-correct')
    }
}


pwdConfirmInput.addEventListener('blur',()=>{
    displayValidity(pwdConfirmInput, pwdConfirmInput.value===pwdInput.value)
})



const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const mail = document.querySelector('#email');
const phone = document.querySelector('#phone');

[fName, lName, mail,phone].forEach(input=>{
    input.addEventListener('blur',()=>{
        displayValidity(input,input.validity.valid)
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