document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const responseMsg = document.getElementById('formResponse');

    responseMsg.textContent = `Thank you, ${name}! Your message has been received. We will get back to you shortly.`;

    this.reset();
});