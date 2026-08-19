// Carrega o SDK do TickCounter
(function(d, s, id) { 
    var js, pjs = d.getElementsByTagName(s)[0]; 
    if (d.getElementById(id)) return; 
    js = d.createElement(s); 
    js.id = id; 
    js.src = "//www.tickcounter.com/static/js/loader.js"; 
    pjs.parentNode.insertBefore(js, pjs); 
}(document, "script", "tickcounter-sdk"));

// Função para tocar a música
function iniciarAudio() {
    const audio = document.getElementById('musica-fundo');
    
    if (audio && audio.paused) {
        audio.play().then(() => {
            // Assim que tocar, remove os ouvintes para não rodar de novo
            document.removeEventListener('click', iniciarAudio);
            document.removeEventListener('touchstart', iniciarAudio);
        }).catch(err => {
            console.log("Aguardando interação...");
        });
    }
}

// Toca ao clicar ou ao tocar na tela do celular
document.addEventListener('click', iniciarAudio);
document.addEventListener('touchstart', iniciarAudio);