//email js

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_3rwtrur',
        'template_4ruauh9',
        e.target,
        'N9x2d_OkytANvnrD-'
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

