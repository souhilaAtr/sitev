const tabs = document.querySelectorAll('.booking-tab');
const forms = document.querySelectorAll('.booking-form');
const accordionToggles = document.querySelectorAll('.accordion-toggle');

function setActiveTab(target) {
    tabs.forEach((tab) => {
        const isActive = tab.dataset.target === target;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
    });

    forms.forEach((form) => {
        form.classList.toggle('active', form.dataset.form === target);
    });
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        setActiveTab(tab.dataset.target);
    });
});

accordionToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));

        const panel = toggle.nextElementSibling;
        if (panel) {
            panel.hidden = expanded;
        }
    });
});

forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(form);
        const summary = Array.from(data.entries())
            .map(([key, value]) => `${key} : ${value || 'non précisé'}`)
            .join('\n');

        alert(`Votre demande a bien été enregistrée :\n\n${summary}`);
        form.reset();
    });
});
