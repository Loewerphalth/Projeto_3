document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o EmailJS
    emailjs.init("YOUR_USER_ID"); // Substitua pelo seu User ID do EmailJS

    // Seleciona todos os links da navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Adiciona o evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
            
            // Obtém o ID da seção alvo
            const targetId = this.getAttribute('href');
            
            // Encontra o elemento alvo
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição do elemento alvo
                const targetPosition = targetElement.offsetTop - 70; // 70px é a altura da navbar
                
                // Rola suavemente até o elemento alvo
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adiciona a classe active ao link correspondente à seção visível
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.col-12[id]');
        const scrollPosition = window.scrollY + 100; // 100px de offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Manipulação do formulário de contato
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Coleta os dados do formulário
            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                mensagem: document.getElementById('mensagem').value
            };

            /* Envia o email usando EmailJS
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                to_email: "Loewerphalth@gmail.com",
                from_name: formData.nome,
                from_email: formData.email,
                phone: formData.telefone,
                message: formData.mensagem
            })
            .then(function(response) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            }, function(error) {
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
                console.error('Erro:', error);
            });*/
        });
    }
});