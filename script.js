const texto = document.querySelector(".texto");
const mensagem = document.querySelector(".msg-encriptada");
var colar = document.querySelector(".btn-colar");
var copiar = document.querySelector(".btn-copiar");
var itens = document.querySelector(".itens")

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function btnEncriptar() {
    if(!texto.value || texto.value == " "){
        alert("Nenhuma mensagem encontrada");

    }else{
        const textoEncriptado = encriptar(texto.value);
        mensagem.value = textoEncriptado;
        texto.value = "";
        
        mensagem.style.display = "block";
        copiar.style.display = 'block';
        itens.style.display = 'none'; 
    }

    document.getElementById("btn-copiar").innerHTML="Copiar";
}

function encriptar(stringEncriptada) {
    var textoDigitado = stringEncriptada.replace(/[áàâãä]/g, "a")
    .replace(/[éèêë]/g, "e")
    .replace(/[íìîï]/g, "i")
    .replace(/[óòôõö]/g, "o")
    .replace(/[úùûü]/g, "u")
    .replace(/[ç]/g, "c");  

    var stringEncriptada = textoDigitado.toLowerCase();
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    if(!texto.value || texto.value == " "){
        alert("Nenhuma mensagem encontrada");

    }else{
        const textoDesencriptado = desencriptar(texto.value);
        mensagem.value = textoDesencriptado;
        texto.value = "";

        mensagem.style.display = "block";
        copiar.style.display = 'block';
        itens.style.display = 'none'; 
    }

    document.getElementById("btn-copiar").innerHTML="Copiar";
}


function desencriptar(stringDesencriptada) {
    var text = stringDesencriptada.replace(/[áàâãä]/g, "a")
    .replace(/[éèêë]/g, "e")
    .replace(/[íìîï]/g, "i")
    .replace(/[óòôõö]/g, "o")
    .replace(/[úùûü]/g, "u")
    .replace(/[ç]/g, "c");  

    var stringDesencriptada = text.toLowerCase();

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
   
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;

}

copiar.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(mensagem.value);
    
    document.getElementById("btn-copiar").innerHTML="Copiado!";

});

colar.addEventListener('click', async (e) => {
    const colar = await navigator.clipboard.readText();//     
    texto.value = colar;
});


