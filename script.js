const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message 
function showError(input, message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';

    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

// Check Email is Vaild
function CheckEmail(input){
const re =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(re.test(input.value.trim())){
    showSuccess(input);
}else{
    showError(input, 'Email is not valid')
}

}
// Check required function
function CheckRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
showError(input , `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });   
}

// Get field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check  input Length
function Checklength(input , min , max){
if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be at least ${min} chracters`);
}else if (input.value.length > max){
    showError(input,`${getFieldName(input)} must be less than ${max} chracters`);

}else{
    showSuccess(input)
}
}
// Check passwords match
function CheckPasswordsmatch(input1 , input2){
if(input1.value !== input2.value){
    showError(input2, 'Passwords do not match')
}
}


//Add Event listeners
form.addEventListener('submit' , function(e){
 e.preventDefault();

 CheckRequired([username , email , password , password2]);
 Checklength(username, 3 , 15); 
 Checklength(password, 6 , 25);
CheckEmail(email);
CheckPasswordsmatch(password, password2);
 
});