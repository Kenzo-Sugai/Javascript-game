let canvas = document.getElementById("animacao");
let ctx = canvas.getContext("2d");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

block = {
    x: Math.floor(Math.random()*70),
    y: Math.floor(Math.random()*70),
    altura: 30,
    largura: 30,
}

function clearblock() {
    ctx.clearRect(block.x, block.y, block.largura, block.altura);
}

async function animacao(){
    ctx.fillStyle = "black";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
    ctx.fillStyle = "blue";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
    ctx.fillStyle = "red";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
    ctx.fillStyle = "green";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
    ctx.fillStyle = "white";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
    ctx.fillStyle = "gold";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
    ctx.fillStyle = "pink";
    block.x = Math.floor(Math.random()*70);
    block.y = Math.floor(Math.random()*70);
    ctx.fill();
    ctx.fillRect(block.x, block.y, block.largura, block.altura);
    await sleep(1000);
    clearblock()
}
requestAnimationFrame(animacao)
function rodar(){
    requestAnimationFrame(animacao);
}