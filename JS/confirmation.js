document.addEventListener("DOMContentLoaded", function () {

    function sendMail(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;


        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        var params = {
            name: name,
            email: email,
            message: message,
        };

        const serviceID = "service_vg759np";
        const templateID = "template_idpyxud";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully!!");
            })
            .catch(err => console.error("Error sending email:", err));
    }

    document.getElementById('form').addEventListener("submit", sendMail);

});

