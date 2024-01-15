AOS.init();

const dataDoEvento = new Date("oct 1, 2024 13:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function () {
    const agora = new Date()
    const timeStampAtual = agora.getTime()



    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;


    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;




    const diasAteEvento = Math.floor(distanciaAteEvento / (diasEmMs));
    const horasAteEvento = Math.floor(distanciaAteEvento % (diasEmMs) / (horasEmMs))
    const minutosAteEvento = Math.floor(distanciaAteEvento % (horasEmMs) / (minutosEmMs))
    const segundosAteEvento = Math.floor(distanciaAteEvento % (minutosEmMs) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = `Evento Espirado`
    }
}, 1000)