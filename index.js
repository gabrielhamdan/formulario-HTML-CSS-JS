const requiredField = document.getElementsByName("required");

function submitMessage() {
    requiredField.forEach(field => {
        if (field.required && field.value === "") {
            field.classList.add("requiredField");
            field.nextElementSibling.classList.add("required")
        }
    });
}

function onFocusOut(field) {
    if (field.value != "") {
        field.classList.add("filled-out");
        field.nextElementSibling.classList.remove("required")
    } else {
        if (field.classList.contains("filled-out")) field.classList.remove("filled-out");
        field.classList.add("requiredField");
        field.nextElementSibling.classList.add("required")
    }
}

function isEmpty(field) {
    if (field.value != "" || field.classList.contains("requiredField")) {
        field.classList.remove("requiredField");
        field.nextElementSibling.classList.remove("required")
    } else field.classList.remove("filled-out");
}