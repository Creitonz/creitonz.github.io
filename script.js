function criptografarTexto(texto) {
    const arrayListText = texto.split('');
    const arrayListEncrypt = [];

    for (let i = 0; i < arrayListText.length; i++) {
        switch (arrayListText[i]) {
            case 'a':
                arrayListEncrypt.push('ai');
                break;
            case 'e':
                arrayListEncrypt.push('enter');
                break;
            case 'i':
                arrayListEncrypt.push('imes');
                break;
            case 'o':
                arrayListEncrypt.push('ober');
                break;
            case 'u':
                arrayListEncrypt.push('ufat');
                break;
            default:
                arrayListEncrypt.push(arrayListText[i]);
        }
    }

    return arrayListEncrypt.join('');
}

function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function criptografarTextoHTML() {
    const inputArea = document.getElementById('input-area');
    const outputArea = document.getElementById('output-area');
    const imagem = document.querySelector('.campo__dois__img');
    const textoPlaceholder = document.querySelector('.campo__dois__text');
    const texto = inputArea.value;

    const textoCriptografado = criptografarTexto(texto);

    outputArea.innerHTML = "<h5 class='texto-criptografado'>" + textoCriptografado + "</h5>";
    imagem.style.display = "none"; // Oculta a imagem
    textoPlaceholder.style.display = "none"; // Oculta o texto de placeholder
}

function descriptografarTextoHTML() {
    const inputArea = document.getElementById('input-area');
    const outputArea = document.getElementById('output-area');
    const texto = inputArea.value;

    const textoDescriptografado = descriptografarTexto(texto);

    outputArea.innerHTML = "<h5 class='texto-criptografado'>" + textoDescriptografado + "</h5>";

    estilizarTextoDescriptografado(); // Aplica os estilos ao texto descriptografado
}

function copiarTexto() {
    // Seleciona o elemento que contém o texto criptografado ou descriptografado
    const outputArea = document.getElementById('output-area');
    const texto = outputArea.textContent;

    // Cria um elemento textarea oculto para armazenar o texto a ser copiado
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);

    // Seleciona o texto dentro do elemento textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');

    // Remove o elemento textarea oculto
    document.body.removeChild(textarea);

    // Alerta o usuário que o texto foi copiado
    alert('Texto copiado para a área de transferência!');
}

// Função para verificar se o texto contém letras maiúsculas
function contemMaiusculas(texto) {
    return texto !== texto.toLowerCase();
}


// Função para verificar o texto e exibir o alerta se necessário
function verificarTexto() {
    const texto = document.getElementById('input-area').value;
    const alerta = document.getElementById('alerta');
    
    if (contemMaiusculas(texto)) {
        alerta.style.display = 'block'; // Mostra o alerta se houver letras maiúsculas
    } else {
        alerta.style.display = 'none'; // Oculta o alerta se não houver letras maiúsculas
    }
}

// Adiciona um ouvinte de evento para chamar a função verificarTexto quando o texto é alterado no textarea
document.getElementById('input-area').addEventListener('input', verificarTexto);