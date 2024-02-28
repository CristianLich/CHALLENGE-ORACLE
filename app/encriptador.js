const textarea= document.querySelector('#texto');
const textoEncriptado= document.getElementById('textoEncriptado');

const muñeco = document.querySelector('.imagen-ventana');
const textoVentana = document.querySelector('.ventana-texto');
const divVentana = document.querySelector('.ventana-encriptada');

const mapeo = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};


function btnCripto(metodo){
    if(textarea.value){

        muñeco.style.display = "none";
        textoVentana.style.display = "none";
        divVentana.style.display = "block";
        
    
        if(metodo === 'encriptar'){
            const texto= encriptar(textarea.value);
            textoEncriptado.innerText = texto;
            
        }
        if(metodo === 'desencriptar'){
            const texto = desencriptar(textoEncriptado.innerText);
            textoEncriptado.innerText = texto
        }
    }
    return
}

function encriptar(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (mapeo[caracter] !== undefined) {
            textoEncriptado += mapeo[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }
    return textoEncriptado;
}

const matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a','ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];
function desencriptar(texto) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return texto;
}


function btnCopiar(){
    textoEncriptado.select();
    document.execCommand("copy");
    console.log('gola')
}