let canvas = document.getElementById("jogocanvas");
let ctx = canvas.getContext("2d");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let pontos = 0;

block = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 30,
    largura: 30,
}

blueblock = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 25,
    largura: 25,
}

greenblock = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 20,
    largura: 20,
}

whiteblock = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 30,
    largura: 30,
}

redblock = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 30,
    largura: 30,
}

goldblock = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 20,
    largura: 20,
}

pinkblock = {
    x: Math.floor(Math.random()*480),
    y: Math.floor(Math.random()*480),
    altura: 10,
    largura: 10,
}

lock = 0;

async function jogo()
{
    pontos = 0;
    for(i = 0; i <= 30; i++){
        lock = 0;
        let aleatorio = Math.floor(Math.random()*50);
        console.log(aleatorio);

        if(aleatorio >= 25){
            ctx.fillStyle = "black";
            block.x = Math.floor(Math.random()*480);
            block.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(block.x, block.y, block.largura, block.altura);
            await sleep(2000);
            clearblock();
        }
        else if(aleatorio === 24){
            ctx.fillStyle = "pink";
            pinkblock.x = Math.floor(Math.random()*480);
            pinkblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(pinkblock.x, pinkblock.y, pinkblock.largura, pinkblock.altura);
            await sleep(500);
            clearpinkblock();
            }
        else if(aleatorio === 21 || aleatorio === 22 || aleatorio === 23){
            ctx.fillStyle = "blue";
            blueblock.x = Math.floor(Math.random()*480);
            blueblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(blueblock.x, blueblock.y, blueblock.largura, blueblock.altura);

            ctx.fillStyle = "green";
            greenblock.x = Math.floor(Math.random()*480);
            greenblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(greenblock.x, greenblock.y, greenblock.largura, greenblock.altura);
            await sleep(1000);
            clearblueblock();
            cleargreenblock();
        }
        else if(aleatorio === 18 || aleatorio === 19 || aleatorio === 20){
            ctx.fillStyle = "blue";
            blueblock.x = Math.floor(Math.random()*480);
            blueblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(blueblock.x, blueblock.y, blueblock.largura, blueblock.altura);

            ctx.fillStyle = "red";
            redblock.x = Math.floor(Math.random()*480);
            redblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(redblock.x, redblock.y, redblock.largura, redblock.altura);
            await sleep(2000);
            clearredblock();
            clearblueblock();
        }
        else if(aleatorio === 17){
            ctx.fillStyle = "gold";
            goldblock.x = Math.floor(Math.random()*480);
            goldblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(goldblock.x, goldblock.y, goldblock.largura, goldblock.altura);
            await sleep(500);
            cleargoldblock();
        }
        else if(aleatorio === 12 || aleatorio === 13 || aleatorio === 14 || aleatorio === 15 || aleatorio === 16){
            ctx.fillStyle = "red";
            redblock.x = Math.floor(Math.random()*480);
            redblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(redblock.x, redblock.y, redblock.largura, redblock.altura);
            await sleep(2000);
            clearredblock();
        }
        else if(aleatorio === 7 || aleatorio === 8 || aleatorio === 9 || aleatorio === 10 || aleatorio === 11){
            ctx.fillStyle = "white";
            whiteblock.x = Math.floor(Math.random()*480);
            whiteblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(whiteblock.x, whiteblock.y, whiteblock.largura, whiteblock.altura);
            await sleep(2000);
            clearwhiteblock();
        }

        else if(aleatorio === 3 || aleatorio === 4 || aleatorio === 5 || aleatorio === 6){
            ctx.fillStyle = "blue";
            blueblock.x = Math.floor(Math.random()*480);
            blueblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(blueblock.x, blueblock.y, blueblock.largura, blueblock.altura);
            await sleep(1000);
            clearblueblock();
        }
        else if(aleatorio === 0 || aleatorio === 1 || aleatorio === 2) {
            ctx.fillStyle = "green";
            greenblock.x = Math.floor(Math.random()*480);
            greenblock.y = Math.floor(Math.random()*480);
            ctx.fill();
            ctx.fillRect(greenblock.x, greenblock.y, greenblock.largura, greenblock.altura);
            await sleep(1000);
            cleargreenblock();
        }
    }
    window.alert("Parabéns, você conseguiu "+pontos+" !!");
    if(pontos >= 50){
        window.alert("Parabéns, você chegou aos 50 pontos! Se você esperava alguma coisa, sinto-lhe decepcionar.")
    }
}

function clearblock() {
    ctx.clearRect(block.x, block.y, block.largura, block.altura);
}

function clearblueblock() {
    ctx.clearRect(blueblock.x, blueblock.y, blueblock.largura, blueblock.altura);
}

function cleargreenblock() {
    ctx.clearRect(greenblock.x, greenblock.y, greenblock.largura, greenblock.altura);
}

function clearwhiteblock() {
    ctx.clearRect(whiteblock.x, whiteblock.y, whiteblock.largura, whiteblock.altura);
}

function clearredblock() {
    ctx.clearRect(redblock.x, redblock.y, redblock.largura, redblock.altura);
}

function cleargoldblock() {
    ctx.clearRect(goldblock.x, goldblock.y, goldblock.largura, goldblock.altura);
}

function clearpinkblock() {
    ctx.clearRect(pinkblock.x, pinkblock.y, pinkblock.largura, pinkblock.altura);
}

async function bonus(){
    for(p = 0; p <= 20; p++) {
        ctx.fillStyle = "gold";
        goldblock.x = Math.floor(Math.random() * 480);
        goldblock.y = Math.floor(Math.random() * 480);
        ctx.fill();
        ctx.fillRect(goldblock.x, goldblock.y, goldblock.largura, goldblock.altura);
        await sleep(800);
        cleargoldblock();
    }
}

canvas.addEventListener("click",(evt)=>{
    let dados = {
        x:evt.layerX,
        y:evt.layerY,
    }
    if(lock === 0){
        if(dados.x >= block.x && dados.x <= block.x + block.largura){
            if(dados.y >= block.y && dados.y <= block.y + block.altura){
                pontos++;
                console.log(pontos);
                clearblock();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
        if(dados.x >= blueblock.x && dados.x <= blueblock.x + blueblock.largura){
            if(dados.y >= blueblock.y && dados.y <= blueblock.y + blueblock.altura){
                pontos = pontos + 2;
                console.log(pontos);
                clearblueblock();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
        if(dados.x >= greenblock.x && dados.x <= greenblock.x + greenblock.largura){
            if(dados.y >= greenblock.y && dados.y <= greenblock.y + greenblock.altura){
                pontos = pontos + 3;
                console.log("pontos: "+pontos);
                cleargreenblock();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
        if(dados.x >= whiteblock.x && dados.x <= whiteblock.x + whiteblock.largura){
            if(dados.y >= whiteblock.y && dados.y <= whiteblock.y + whiteblock.altura){
                pontos = pontos - 1;
                console.log(pontos);
                clearwhiteblock();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
        if(dados.x >= redblock.x && dados.x <= redblock.x + redblock.largura){
            if(dados.y >= redblock.y && dados.y <= redblock.y + redblock.altura){
                pontos = pontos - 2;
                console.log(pontos);
                clearredblock();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
        if(dados.x >= goldblock.x && dados.x <= goldblock.x + goldblock.largura){
            if(dados.y >= goldblock.y && dados.y <= goldblock.y + goldblock.altura){
                pontos = pontos + 5;
                console.log(pontos);
                cleargoldblock();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
        if(dados.x >= pinkblock.x && dados.x <= pinkblock.x + pinkblock.largura){
            if(dados.y >= pinkblock.y && dados.y <= pinkblock.y + pinkblock.altura){
                pontos++;
                console.log(pontos);
                clearpinkblock();
                bonus();
                lock = 1;
                document.getElementById("pontuacao").innerHTML=("Pontuação: "+pontos);
            }
        }
    }
})


