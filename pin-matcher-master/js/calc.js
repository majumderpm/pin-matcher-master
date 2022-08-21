
// /// calcluter 

// document.getElementById('calc-room').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     const typeNumberField = document.getElementById('typed-numbers');
//     const typeNumberString = typeNumberField.value;
//     if(isNaN(number)){
//         if(number === 'C'){
//             typeNumberField.value = '';
//         }
//        else if(number === '<'){
//             const digits = typeNumberString.split('');
//             digits.pop();
//             const remainingDigit = digits.join('');
//             // typeNumberField.value = remainingDigit;
//        }
     
//     }
//     else{
//         const newTypeNumber = typeNumberString + number
//         typeNumberField.value = newTypeNumber; 
//     }
//     // if(isNaN(number)){
//     //     if(number === 'C'){
//     //         typedNumberField.value = '';
//     //     }
//     //     else if (number === '<'){
//     //         const digits = previousTypedNumber.split('');
//     //         digits.pop();
//     //         const remainingDigits = digits.join('');
//     //         typedNumberField.value = remainingDigits;
//     //     }
//     // }
//     // else{
//     //     const newTypedNumber = previousTypedNumber + number;
//     //     typedNumberField.value = newTypedNumber;
//     // }
   
// })


document.getElementById('calc-room').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})



// veryfy pin number


document.getElementById('submit').addEventListener('click', function(){
    // console.log('veryfiypin number')
    const displayPinField = document.getElementById('display-pin');
    const currentpin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typeNumber = typedNumberField.value;
    const pinSucessMessage = document.getElementById('sucess_pin');
    const pinIncurretMessage = document.getElementById('incurret_pin');
    if(typeNumber === currentpin){
       
        pinSucessMessage.style.display = 'block';
        pinIncurretMessage.style.display = 'none';
    }
    else{
        
        pinIncurretMessage.style.display = 'block';
        pinSucessMessage.style.display = 'none';
    }
})