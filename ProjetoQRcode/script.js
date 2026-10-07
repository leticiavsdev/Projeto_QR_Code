let imgCaixa = document.getElementById('ImgCaixa');
let qrImg = document.getElementById('qrImg');
let qrTexto = document.getElementById('qrTexto');

function geradorQR() {
    if (qrTexto.value.length > 0) { 
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTexto.value;
        imgCaixa.classList.add("show-img");
    } else {
        qrTexto.classList.add("erro");
        setTimeout(() => { 
            qrTexto.classList.remove("erro");
        }, 1000);
    }
}