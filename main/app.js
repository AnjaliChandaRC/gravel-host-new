//email js

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_23j22r6',
        'template_3mncha6',
        e.target,
        'hwN2jXJE0h2K-OMSO'
    ).then(
        function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('success-message').style.right = '2%';
            document.getElementById('submit-btn').style.right = '-82%';
            e.target.reset();
            setTimeout(() => {
                document.getElementById('success-message').style.right = '-82%';
                document.getElementById('submit-btn').style.right = '2%';
            }, 2000);
        },
        function (error) {
            console.log('FAILED...', error);
        }
    );
}

