



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








