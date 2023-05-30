const texto = document.querySelector(".texto");
const mensagem = document.querySelector(".msg-encriptada");
var copiar = document.querySelector(".btn-copiar");
var itens = document.querySelector(".itens")

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`



function btnEncriptar() {
    const textoEncriptado = encriptar(texto.value);
    mensagem.value = textoEncriptado;
    texto.value = "";

    mensagem.style.display = "block";
    copiar.style.display = 'block';
    itens.style.display = 'none'; 
    
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;


}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(texto.value);
    mensagem.value = textoDesencriptado;
    texto.value = "";

    mensagem.style.display = "block";
    copiar.style.display = 'block';
    itens.style.display = 'none'; 
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
	
	var textToCopy = mensagem.value;
  
	navigator.clipboard.writeText(textToCopy);

    alert("Texto copiado para a área de transferência");
    
  } 

  btnCriptografa.addEventListener("click", function() {
    textarea.style.display = "block";
    botaoCopiar.style.display = 'block';
    imagem.style.display = 'none'
    mensagem.style.display = 'none'
});
