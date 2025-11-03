// Función para implementar el scroll suave en todos los enlaces de ancla
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previene el salto instantáneo
        e.preventDefault();

        // Obtiene el ID del destino (ej: #contacto)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Desplazamiento suave con API nativa
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Manejo de envío de formulario con Formspree (fetch)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.p-4.border.rounded.shadow-sm');
    if (!form) return;

    const statusEl = document.getElementById('form-status');
    const endpoint = form.getAttribute('data-endpoint');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!endpoint || endpoint.includes('XXXXXXXX')) {
            if (statusEl) statusEl.textContent = 'Configura tu endpoint de Formspree para habilitar el envío.';
            return;
        }

        const formData = new FormData(form);
        try {
            if (statusEl) statusEl.textContent = 'Enviando...';
            const resp = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (resp.ok) {
                if (statusEl) statusEl.textContent = '¡Gracias! Hemos recibido su solicitud.';
                form.reset();
            } else {
                const data = await resp.json().catch(() => ({}));
                const msg = (data && data.errors && data.errors[0] && data.errors[0].message) || 'Ocurrió un error al enviar. Intente nuevamente.';
                if (statusEl) statusEl.textContent = msg;
            }
        } catch (err) {
            if (statusEl) statusEl.textContent = 'No se pudo conectar. Verifique su conexión e intente de nuevo.';
        }
    });
});