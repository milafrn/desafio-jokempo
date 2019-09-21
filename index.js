const $nomeJogador2 = document.querySelector('.nome-jogador2');

const $contador1 = document.querySelector('.contador-1');
const $contador2 = document.querySelector('.contador-2');

const $botaoPapelJogador1 = document.querySelector('.botao-papel-jogador1');
const $botaoPedraJogador1 = document.querySelector('.botao-pedra-jogador1');
const $botaoTesouraJogador1 = document.querySelector('.botao-tesoura-jogador1');

const $botaoPapelJogador2 = document.querySelector('.botao-papel-jogador2');
const $botaoPedraJogador2 = document.querySelector('.botao-pedra-jogador2');
const $botaoTesouraJogador2 = document.querySelector('.botao-tesoura-jogador2');
const $botoesJogador2 = document.querySelector('.botoes-jogador2');

const $campoJogador1 = document.querySelector('.campo-1');
const $campoJogador2 = document.querySelector('.campo-2');

const $resultado = document.querySelector('.resultado');
const $resetar = document.querySelector('.resetar');
const $botaoBot = document.querySelector('.botao-bot');

let jogadaJogador1 = undefined;
let jogadaJogador2 = undefined;
let bot = false;

function imprimirImagemJogador1(){
    if(jogadaJogador1 == 'papel'){
        $campoJogador1.innerHTML = '<img src="papel.png"></img>';
    }
    if(jogadaJogador1 == 'pedra'){
        $campoJogador1.innerHTML = '<img src="pedra.png"></img>';
    }
    if(jogadaJogador1 == 'tesoura'){
        $campoJogador1.innerHTML = '<img src="tesoura.png">';
    }
}

 function imprimirImagemJogador2(){
    if(jogadaJogador2 == 'papel'){
        $campoJogador2.innerHTML = '<img src="papel.png">';
    }
    if(jogadaJogador2 == 'pedra'){
        $campoJogador2.innerHTML = '<img src="pedra.png">';
    }
    if(jogadaJogador2 == 'tesoura'){
        $campoJogador2.innerHTML = '<img src="tesoura.png">';
    }
}

function habilitarBotoes(){
    $botaoPapelJogador1.disabled = false;
    $botaoPedraJogador1.disabled = false;
    $botaoTesouraJogador1.disabled = false;
    $botaoPapelJogador2.disabled = false;
    $botaoPedraJogador2.disabled = false;
    $botaoTesouraJogador2.disabled = false;
}
function desabilitarJogador1(){
    $botaoPapelJogador1.disabled = true;
    $botaoPedraJogador1.disabled = true;
    $botaoTesouraJogador1.disabled = true;

}

function desabilitarJogador2(){
    $botaoPapelJogador2.disabled = true;
    $botaoPedraJogador2.disabled = true;
    $botaoTesouraJogador2.disabled = true;
}

function verificarVencedor(){
    if(jogadaJogador1 == jogadaJogador2){
        $resultado.innerHTML = 'Empate!';
    }
    if(jogadaJogador1 == 'papel' && jogadaJogador2 == 'pedra'){
        $resultado.innerHTML = 'Jogador 01 Ganhou!';    
        if(parseInt($contador1.innerHTML) + 1 <= 9){
            $contador1.innerHTML = '0' + (parseInt($contador1.innerHTML) + 1);
        }else{
            $contador1.innerHTML = parseInt($contador1.innerHTML) + 1;
        }
    }

    if(jogadaJogador1 == 'pedra' && jogadaJogador2 == 'tesoura'){
        $resultado.innerHTML = 'Jogador 01 Ganhou!';
        if(parseInt($contador1.innerHTML) + 1 <= 9){
            $contador1.innerHTML = '0' + (parseInt($contador1.innerHTML) + 1);
        }else{
            $contador1.innerHTML = parseInt($contador1.innerHTML) + 1;
        }
    }

    if(jogadaJogador1 == 'tesoura' && jogadaJogador2 == 'papel'){
        $resultado.innerHTML = 'Jogador 01 Ganhou!';
        if(parseInt($contador1.innerHTML) + 1 <= 9){
            $contador1.innerHTML = '0' + (parseInt($contador1.innerHTML) + 1);
        }else{
            $contador1.innerHTML = parseInt($contador1.innerHTML) + 1;
        }
    }

    if(jogadaJogador2 == 'papel' && jogadaJogador1 == 'pedra'){
        if(!bot){
            $resultado.innerHTML = 'Jogador 02 Ganhou!';
        }else{
            $resultado.innerHTML = 'Bot Ganhou!';
        } 
        if(parseInt($contador2.innerHTML) + 1 <= 9){
            $contador2.innerHTML = '0' + (parseInt($contador2.innerHTML) + 1);
        }else{
            $contador2.innerHTML = parseInt($contador2.innerHTML) + 1;
        }
    }

    if(jogadaJogador2 == 'pedra' && jogadaJogador1 == 'tesoura'){
        if(!bot){
            $resultado.innerHTML = 'Jogador 02 Ganhou!';
        }else{
            $resultado.innerHTML = 'Bot Ganhou!';
        } 
        if(parseInt($contador2.innerHTML) + 1 <= 9){
            $contador2.innerHTML = '0' + (parseInt($contador2.innerHTML) + 1);
        }else{
            $contador2.innerHTML = parseInt($contador2.innerHTML) + 1;
        }
    }

    if(jogadaJogador2 == 'tesoura' && jogadaJogador1 == 'papel'){
        if(!bot){
            $resultado.innerHTML = 'Jogador 02 Ganhou!';
        }else{
            $resultado.innerHTML = 'Bot Ganhou!';
        } 
        if(parseInt($contador2.innerHTML) + 1 <= 9){
            $contador2.innerHTML = '0' + (parseInt($contador2.innerHTML) + 1);
        }else{
            $contador2.innerHTML = parseInt($contador2.innerHTML) + 1;
        }
    }
    setTimeout(function(){
        if(!!jogadaJogador1 && !!jogadaJogador2){
            jogadaJogador1 = undefined;
            jogadaJogador2 = undefined;
            $campoJogador1.innerHTML = '';
            $campoJogador2.innerHTML = '';
            habilitarBotoes();
        }
    },2000)
    
}

function reset(){
    $campoJogador1.innerHTML = '';
    $campoJogador2.innerHTML = '';
    $resultado.innerHTML = 'Quem Ganhou?';
    jogadaJogador1 = undefined;
    jogadaJogador2 = undefined;
    $contador1.innerHTML = '00';
    $contador2.innerHTML = '00';
    habilitarBotoes();
}

function jogadorBot(){
    if(bot){
    const jogadaBot = Math.floor(Math.random() * 3);
    if(jogadaBot == 0){
        jogadaJogador2 = 'papel';
    }
    if(jogadaBot == 1){
        jogadaJogador2 = 'pedra';
    }
    if(jogadaBot == 2){
        jogadaJogador2 = 'tesoura';
    }
    imprimirImagemJogador2();
    }
}   


$botaoPapelJogador1.addEventListener('click', function(){
    jogadaJogador1 = 'papel';
    imprimirImagemJogador1();
    desabilitarJogador1();
    jogadorBot();   
    verificarVencedor();
})

$botaoPedraJogador1.addEventListener('click', function(){
    jogadaJogador1 = 'pedra';
    imprimirImagemJogador1();
    desabilitarJogador1();
    jogadorBot();
    verificarVencedor();
})

$botaoTesouraJogador1.addEventListener('click', function(){
    jogadaJogador1 = 'tesoura';
    imprimirImagemJogador1();
    desabilitarJogador1();
    jogadorBot();
    verificarVencedor();
})

$botaoPapelJogador2.addEventListener('click', function(){
    if(!bot){
    jogadaJogador2 = 'papel';
    imprimirImagemJogador2();
    verificarVencedor();
    desabilitarJogador2();
    }
})

$botaoPedraJogador2.addEventListener('click', function(){
    if(!bot){
    jogadaJogador2 = 'pedra';
    imprimirImagemJogador2();
    verificarVencedor();
    desabilitarJogador2();
    }
})

$botaoTesouraJogador2.addEventListener('click', function(){
    if(!bot){
    jogadaJogador2 = 'tesoura';
    imprimirImagemJogador2();
    verificarVencedor();
    desabilitarJogador2();
    }
})

$resetar.addEventListener('click', function(){
    reset();
})

$botaoBot.addEventListener('click', function(){
    bot = !bot;
    if(bot){
        $botaoBot.textContent = 'Desativar Bot';
        $nomeJogador2.textContent = 'Bot Ativado!';
        $botoesJogador2.style.display = 'none';
        desabilitarJogador2();
    }else{
        $botaoBot.textContent = 'Ativar Bot';
        $nomeJogador2.textContent = 'Jogadora 2';
        $botoesJogador2.style.display = 'flex'; 
        habilitarBotoes();
    }
    reset();
})

