emailjs.init("8poKFbjjuT-8QFphQ");
const forma = document.getElementById(`formulario`);
const btn = document.getElementById(`boton`);

forma.addEventListener(`submit`, function(event){
    event.preventDefault();
    btn.disabled = true;
    btn.textContent = `Enviando...`;

    emailjs.sendForm(`service_g1bvybg`, `template_rayz8th`, this)
        .then(() => {
            alert(`¡Correo enviado con exito!`);
            forma.reset();
        })
        .catch((err) => {
            alert(`Error al enviar el correo. Por favor intentar de nuevo`);
            console.error(`EmailJS Error: `, err);

        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = `Enviar`;

        });                
});