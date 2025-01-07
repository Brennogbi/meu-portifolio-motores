const editarBtn = document.getElementById('editar-produtos');
const salvarBtn = document.getElementById('salvar-produtos');
const produtos = document.querySelectorAll('.produto');

// Proteção com senha
editarBtn.addEventListener('click', () => {
    const senha = prompt('🔒 Digite a senha para editar:');
    if (senha === 'admin123') {
        produtos.forEach(produto => {
            produto.querySelector('h2').contentEditable = true;
            produto.querySelector('p').contentEditable = true;
            produto.querySelector('.preco').contentEditable = true;
            produto.querySelector('.input-imagem').classList.remove('oculto');
        });
        salvarBtn.classList.remove('oculto');
    } else {
        alert('❌ Senha incorreta!');
    }
});

// Salvar Alterações
salvarBtn.addEventListener('click', () => {
    produtos.forEach(produto => {
        const imgInput = produto.querySelector('.input-imagem');
        const imgTag = produto.querySelector('img');
        const descricao = produto.querySelector('p').innerText;
        const preco = produto.querySelector('.preco').innerText;

        if (imgInput.files[0]) {
            imgTag.src = URL.createObjectURL(imgInput.files[0]);
        }

        localStorage.setItem(produto.dataset.id, JSON.stringify({
            descricao,
            preco,
            imgSrc: imgTag.src
        }));
    });
    salvarBtn.classList.add('oculto');
});
