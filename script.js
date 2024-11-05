document.addEventListener('DOMContentLoaded', () => {
    const templateGrid = document.querySelector('.template-grid');
    const templates = [
        { name: 'Presentación', image: 'https://via.placeholder.com/300x200.png?text=Presentación' },
        { name: 'Instagram', image: 'https://via.placeholder.com/300x200.png?text=Instagram' },
        { name: 'Currículum', image: 'https://via.placeholder.com/300x200.png?text=Currículum' },
        { name: 'Infografía', image: 'https://via.placeholder.com/300x200.png?text=Infografía' },
        { name: 'Tarjeta de visita', image: 'https://via.placeholder.com/300x200.png?text=Tarjeta+de+visita' },
        { name: 'Invitación', image: 'https://via.placeholder.com/300x200.png?text=Invitación' },
        { name: 'Logo', image: 'https://via.placeholder.com/300x200.png?text=Logo' },
        { name: 'Póster', image: 'https://via.placeholder.com/300x200.png?text=Póster' },
    ];

    // Agregar plantillas dinámicamente
    templates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `
            <img src="${template.image}" alt="${template.name}">
            <h3>${template.name}</h3>
        `;
        templateGrid.appendChild(templateItem);
    });

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición para las secciones
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});