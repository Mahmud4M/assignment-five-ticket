
// Next button disabled
document.addEventListener("DOMContentLoaded", function() {
    const number = document.getElementById("number");
    const submit = document.getElementById("submit");

    number.addEventListener("input", function() {
        if (number.value.trim() !== '' && isValidNumber(number.value) && number.value.trim() < 9999999999) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    });

    function isValidNumber(value) {
        return !isNaN(value);
    }
});






// Show Wellcome
function backall() {
    showElementById('navbar');
    showElementById('offers');
    showElementById('booking');
    showElementById('footer');
    hideElementById('wellcome');
}

function messege() {
    hideElementById('navbar');
    hideElementById('offers');
    hideElementById('booking');
    hideElementById('footer');
    showElementById('wellcome');
}

function hideElementById(elemenntId) {
    const element = document.getElementById(elemenntId);
    element.classList.add('hidden');
}

function showElementById(elemenntId) {
    const element = document.getElementById(elemenntId);
    element.classList.remove('hidden');
}








