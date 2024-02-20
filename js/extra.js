
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




// Modal

let popup = document.getElementById('wellcome');

function messege() {
    popup.classList.remove('hidden');
}


function closeMessege() {
    popup.classList.add('hidden');
}

