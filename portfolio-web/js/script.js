// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNCIONALIDADE 1: ALTERNAÇÃO DE TEMA CLARO/ESCURO ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Altera o texto do botão conforme o tema ativo
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Escuro';
        }
    });

    // --- FUNCIONALIDADE 2: VALIDAÇÃO E SIMULAÇÃO DO FORMULÁRIO DE CONTATO ---
    const form = document.getElementById('contact-form');
    const feedbackMsg = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        // Evita que a página seja recarregada ao enviar o formulário
        event.preventDefault();

        // Captura os valores inseridos pelos usuários
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Expressão regular para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação de campos vazios
        if (nome === '' || email === '' || mensagem === '') {
            feedbackMsg.style.color = '#ef4444';
            feedbackMsg.textContent = 'Por favor, preencha todos os campos antes de enviar.';
            return;
        }

        // Validação do formato do e-mail
        if (!emailRegex.test(email)) {
            feedbackMsg.style.color = '#ef4444';
            feedbackMsg.textContent = 'Por favor, informe um e-mail válido (exemplo: usuario@dominio.com).';
            return;
        }

        // Simulação do envio bem-sucedido
        feedbackMsg.style.color = '#22c55e';
        feedbackMsg.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';

        // Alerta visual obrigatório conforme pedido no edital da atividade
        alert('Mensagem enviada com sucesso!');

        // Limpa todos os campos do formulário após o envio
        form.reset();
    });
});
