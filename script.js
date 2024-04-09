function cifraDeCesar(texto, chave) {
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
  
      if (char.match(/[a-zA-Z]/)) {
        let codigo = texto.charCodeAt(i);
        let maiuscula = (codigo >= 65 && codigo <= 90);
        let limite = maiuscula ? 65 : 97;
        let novaPosicao = (codigo - limite + chave) % 26;
        if (novaPosicao < 0) novaPosicao += 26;
        resultado += String.fromCharCode(novaPosicao + limite);
      } else {
        resultado += char;
      }
    }
  
    return resultado;
  }
  
  function criptografar() {
    let textoOriginal = document.getElementById("textoOriginal").value;
    let chave = parseInt(document.getElementById("chave").value);
    let textoCifrado = cifraDeCesar(textoOriginal, chave);
    document.getElementById("textoCifrado").value = textoCifrado;
  }
  
  function descriptografar() {
    let textoCifrado = document.getElementById("textoCifrado").value;
    let chave = parseInt(document.getElementById("chave").value);
    let textoOriginal = cifraDeCesar(textoCifrado, -chave);
    document.getElementById("textoOriginal").value = textoOriginal;
  }
  










