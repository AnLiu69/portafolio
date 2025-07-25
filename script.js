const btnCopiar = document.getElementById('btn-copiar');
const correo = document.querySelector('#input-correo').value;

btnCopiar.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(correo);  
    } catch (error) {
        alert('Error al copiar: ' + error);
    }
})