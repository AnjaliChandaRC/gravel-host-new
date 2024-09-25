const pricingData = {
    monthly: [
        { slots: '30 Slots', ram: '10GB RAM', price: '12.99', data: 'monthly' },
        { slots: '70 Slots', ram: '12GB RAM', price: '29.99', data: 'monthly' },
        { slots: '100+ Slots', ram: '16GB+ RAM', price: '49.99,', data: 'monthly' },
    ],
    quarterly: [
        { slots: '40 Slots', ram: '12GB RAM', price: '36.99', data: 'quarterly' },
        { slots: '80 Slots', ram: '14GB RAM', price: '87.99', data: 'quarterly' },
        { slots: '120+ Slots', ram: '18GB+ RAM', price: '149.99', data: 'quarterly' },
    ],
    'semi-annually': [
        { slots: '50 Slots', ram: '16GB RAM', price: '72.99', data: 'semi-annually' },
        { slots: '90 Slots', ram: '18GB RAM', price: '174.99', data: 'semi-annually' },
        { slots: '150+ Slots', ram: '20GB+ RAM', price: '299.99', data: 'semi-annually' },
    ],
    annually: [
        { slots: '70 Slots', ram: '18GB RAM', price: '144.99', data: 'annually' },
        { slots: '100+ Slots', ram: '24GB RAM', price: '349.99', data: 'annually' },
        { slots: '170+ Slots', ram: '28GB+ RAM', price: '599.99', data: 'annually' },
    ]
};

function updatePlanDetails(planType) {
    const slots = document.querySelectorAll('.plan-slots');
    const ram = document.querySelectorAll('.plan-ram');
    const prices = document.querySelectorAll('.plan-price');
    const data = document.querySelectorAll('.plan-data');

    slots.forEach((slot, index) => {
        slot.textContent = pricingData[planType][index].slots;
    });

    ram.forEach((ram, index) => {
        ram.textContent = pricingData[planType][index].ram;
    });

    prices.forEach((price, index) => {
        price.textContent = pricingData[planType][index].price;
    });
    data.forEach((data, index) => {
        data.textContent = pricingData[planType][index].data;
    });
}

const buttons = document.querySelectorAll(".btn-monthly");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const activeBtn = document.querySelector(".position-relative .active-btn");
        event.target.parentElement.classList.toggle("active-btn");
        if (activeBtn) activeBtn.classList.remove("active-btn");

        const planType = event.target.dataset.plan;
        updatePlanDetails(planType);
    });
});

//

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
            document.getElementById('success-message').style.right = '2%'; // Show success message
            document.getElementById('submit-btn').style.right = '-82%'; // Hide submit button

            // Reset the form data
            e.target.reset(); // Use the event's target to reset the form

            // Hide success message and show the button again after 2 seconds
            setTimeout(() => {
                document.getElementById('success-message').style.right = '-82%'; // Hide success message
                document.getElementById('submit-btn').style.right = '2%'; // Show submit button again
            }, 2000); // Hide after 2 seconds
        },
        function (error) {
            console.log('FAILED...', error);
        }
    );
}