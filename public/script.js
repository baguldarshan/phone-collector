const form = document.getElementById("contactForm");
const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const phone = phoneInput.value;

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {

        const response = await fetch("/api/contacts", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                phone: phone
            })
        });

        const data = await response.json();

        message.textContent = data.message;

        if (response.ok) {
            form.reset();
        }

    } catch (error) {

        message.textContent = "Something went wrong.";

    } finally {

        submitButton.disabled = false;
        submitButton.textContent = "Submit";

    }
});