let form_name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    if (
        form_name.value == "" &&
        email.value == "" &&
        subject.value == "" &&
        message.value == ""
    ) {
        alert("All fields are required");
        return;
    } else {
        submitEmail();
    }
})


function submitEmail() {
    let param = {
        method: "POST",
        from_name: form_name.value,
        to_name: "Shuvro!",
        subject: subject.value,
        message: message.value,
    };

    emailjs.send("service_7b9olgm", "template_w25rcoa", param).then(
        function (response) {
            alert("SUCCESS! " + response.status + ' ' + response.text);
        },
        function (error) {
            alert("FAILED... " + error);
        }
    );
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
