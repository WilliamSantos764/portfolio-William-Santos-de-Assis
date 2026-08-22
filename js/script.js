// Executa o script assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. COMPONENTE INTERATIVO: ALTERNAÇÃO DE TEMA (CLARO/ESCURO) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Atualiza a legenda do botão conforme o estado
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Escuro';
        }
    });

    // --- 2. COMPONENTE INTERATIVO: VALIDAÇÃO E SIMULAÇÃO DE ENVIO ---
    const form = document.getElementById('contact-form');
    const feedbackMsg = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        // Previne o envio padrão que recarregaria a página
        event.preventDefault();

        // Extrai e sanitiza os campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Expressão regular oficial para validação de e-mail no formato usuario@dominio.com
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação de preenchimento dos campos
        if (nome === '' || email === '' || mensagem === '') {
            feedbackMsg.style.color = '#ef4444';
            feedbackMsg.textContent = 'Por favor, preencha todos os campos antes de enviar.';
            return;
        }

        // Validação de estrutura do e-mail
        if (!emailRegex.test(email)) {
            feedbackMsg.style.color = '#ef4444';
            feedbackMsg.textContent = 'Por favor, insira um e-mail válido (ex: usuario@dominio.com).';
            return;
        }

        // Confirmação de envio (Simulação exigida na diretriz)
        feedbackMsg.style.color = '#22c55e';
        feedbackMsg.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';

        // Alerta pop-up de confirmação
        alert('Mensagem enviada com sucesso!');

        // Limpeza dos campos
        form.reset();
    });
});
