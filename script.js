const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');
const phone=document.getElementById('phone');


email.addEventListener('keydown', function(event) {
const key = event.key;

if(key === "Backspace" || key=== "Delete") {
    checkEmail(email);
}
else {
    checkEmail(email);
}
});


function checkEmail(input)
{
    const emailControl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
    if(emailControl.test(input.value))
    {
        console.log("geçerli bir email")
    }
    else
    {
        console.log("geçersiz bir email");
        error(input,'geçersiz bir email adresi');
    }
}

function checkLength(input,min,max)
{
    if(input.value.length <min )
    {
        error(input,`${input.id} en az ${min} karakter olmalıdır`)
    }
    else if(input.value.length >max )
    {
        error(input,`${input.id} en fazla ${max} karakter olmalıdır`)
    }
    else 
    {
        success(input);
    }
}
function checkPhone(input)
{
  var phoneControl =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(!phoneControl.test(input.value))
  error(input,'Telefon 10 karakterli olmalıdır');

}
function validatePhone(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });




function error(input,message)
{
    input.className ='form-control is-invalid';
    const div =input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function success(input) {
    input.className ='form-control is-valid'
}
function checkRequired(inputs)
{
   inputs.forEach(function(input){
    if(input.value === ''){
        error(input,`${input.id} bir değer giriniz`);
    }
    else{
        success(input);
    }
   });
}
function checkPasswords(input1,input2)
{
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor');
    }
}





form.addEventListener('submit',function(e){
    console.log("tiklandi");
    e.preventDefault();

   // var abc = document.getElementById('username')
   

    console.log(username.value);
    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,15);
    checkPhone(phone)
    checkPasswords(password,repassword);
})