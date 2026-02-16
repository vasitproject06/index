        const links = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('main section');
        const cards = document.querySelectorAll('.card');

        function showSection(sectionId) {
            sections.forEach(sec => sec.classList.remove('active'));
            const target = document.getElementById(sectionId);
            if (target) target.classList.add('active');

            links.forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                showSection(sectionId);
            });
        });

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const target = card.getAttribute('data-target');
                showSection(target);
            });
        });

        // Animate cards on load
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));

        // Default
        showSection('home');