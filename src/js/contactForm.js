export const contactForm =()=> {

    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const submitBtn = form.querySelector('.main-button');
        const succesDiv = document.querySelector('.succes');
        const errorDiv = document.querySelector('.error');

        submitBtn.disabled = true;

        const formData = new FormData(form);

        const url = form.getAttribute('action');
        const method = form.getAttribute('method');

        fetch(url, {
            method: method,
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    succesDiv.style.display = 'block';
                    errorDiv.style.display = 'none';
                }
                if (res.status === 'error') {
                    errorDiv.style.display = 'block';
                    succesDiv.style.display = 'none';
                }
            }).finally(()=>{
                submitBtn.disabled = false;
        })

    })

}