var passwordBox = document.querySelector('#password');
var copyBtn = document.querySelector('#copyBtn');
var generateBtn = document.querySelector('#generateBtn');

var allCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allSmall = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "~`!@#$%^&*()_-+={[}]/?>.<,:;|\\'\""
var allChar = allCaps + allSmall + numbers + symbols;

function generatePassword(){
    var passcode = "";
    passcode += allCaps[Math.floor((Math.random() * allCaps.length))];
    passcode += allSmall[Math.floor((Math.random() * allSmall.length))];
    passcode += numbers[Math.floor((Math.random() * numbers.length))];
    passcode += symbols[Math.floor((Math.random() * symbols.length))];
    while (passcode.length < 12){
        passcode += allChar[Math.floor((Math.random() * allChar.length))];
    }
    return passcode;
}

function copyPassword(){
    var textToCopy = passwordBox.value;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            return;
        })
    } else {
        alert('Browser Not compatible');
    }
}

generateBtn.addEventListener('click', function(){
    var passcode = generatePassword();
    passwordBox.value = passcode;
})

copyBtn.addEventListener('click', copyPassword);