const form = document.getElementById('contactForm');
const inputs = document.querySelectorAll(".input, select");

function validateField(input) {
    const errorSpan = input.nextElementSibling;
    let errorMessage = "";

    if (input.id === "vorname" || input.id === "nachname") {
        if (input.value.length < 2) {
            errorMessage = "Muss mindestens 2 Buchstaben lang sein.";
        } else if (/\d/.test(input.value)) {
            errorMessage = "Zahlen sind nicht erlaubt.";
        }
    } else if (input.id === "adresse") {
        if (input.value.length < 5) {
            errorMessage = "Adresse muss mindestens 5 Zeichen haben.";
        }
    } else if (input.id === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
            errorMessage = "Bitte eine gültige E-Mail-Adresse eingeben.";
        } 
    } 

    // regex
    else if (input.id === "plz") {
        const plzPattern = /^[0-9]+$/;
        if (!plzPattern.test(input.value)) {
            errorMessage = "Postleitzahl darf nur aus Zahlen bestehen.";
        }
    }

    // regex
    else if (input.id === "ort") {
        const ortPattern = /^[a-zA-ZäöüÄÖÜß\s]+$/;
        if (!ortPattern.test(input.value)) {
            errorMessage = "Ort darf nur aus Buchstaben bestehen.";
        }
    }

    // standart validierung => checkValidity vordefinierte html methode
    if (!input.checkValidity() && errorMessage === "") {
        errorMessage = input.validationMessage;
    }

    if (errorMessage) {
        errorSpan.textContent = errorMessage;
        input.classList.add("invalid");
        return false; 
    } else {
        errorSpan.textContent = "";
        input.classList.remove("invalid");
        return true; 
    }
}

inputs.forEach(input => {
    input.addEventListener('focusout', () => validateField(input));
});

form.addEventListener('submit', (e) => {
    let formIsValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            formIsValid = false; 
        }
    });

    if (!formIsValid) {
        e.preventDefault(); 
    } else {
        e.preventDefault();
        console.log("Formular versendet");
    }
});