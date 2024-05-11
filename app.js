let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

   function textoNaTela(tag, texto) {
     let campo = document.querySelector(tag , texto);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
   }

    function mensagemInicial() {
   textoNaTela('h1', 'Jogo do numero secreto');
   textoNaTela('p', 'Digite um numero de 1 a 10000');
    }

    mensagemInicial();

    function gerarNumeroAleatorio() {
      let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
      if(quantidadeDeElementosDaLista == 10) {
          listaDeNumerosSorteados = [];
      }

      if(listaDeNumerosSorteados.includes(numeroGerado)) {
          return gerarNumeroAleatorio();
      } else {
          if(listaDeNumerosSorteados.push(numeroGerado)) {
          console.log(listaDeNumerosSorteados);
          return numeroGerado;  
      }
     }
}   
    

    function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
    }


function verificarChute() {
          chute = document.querySelector('input').value;

          if(chute > numeroSecreto) {
               textoNaTela('h1', 'Errou');
               let mensagemErro = `O número é menor que ${chute}`;
               textoNaTela('p', mensagemErro);
          } else {
               if (chute < numeroSecreto) {
                    textoNaTela('h1', 'Errou');
                    let mensagemErro2 = `O número é maior que ${chute}`;
                    textoNaTela('p', mensagemErro2);
               }
          }

               if(chute == numeroSecreto) {
                    textoNaTela('h1', 'Acertou');
                    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                    let mensagemAcerto = `Acertou com ${tentativas} ${palavraTentativa}`;
                    textoNaTela('p', mensagemAcerto );
                    document.getElementById('reiniciar').removeAttribute('disabled');
               }
               tentativas++;
               limparCampo();
          }
          
         function reiniciarJogo() {
          numeroSecreto = gerarNumeroAleatorio();
          limparCampo();
          tentativas = 1;
          mensagemInicial();
         }
          