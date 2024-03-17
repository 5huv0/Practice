function validation(){
    const inputObj = document.getElementById('id1');

    if(inputObj.validity.rangeOverflow){
        inputObj.setCustomValidity('You have made a range overflow');
    }

    else if(inputObj.validity.rangeUnderflow){
        inputObj.setCustomValidity('You have made a range under flow');
    }

    else if(inputObj.validity.valueMissing){
        inputObj.setCustomValidity('Your value is missing');

    }

    if(!inputObj.checkValidity()){
        document.getElementById('demo').innerHTML = inputObj.validationMessage;   
    }
}