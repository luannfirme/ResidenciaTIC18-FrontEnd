async function ObterTemperaturaAtual() {
    try {
        const resposta = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-14.796581726513459&lon=-39.173008679879025&exclude=minutely,hourly&units=metric&appid=70fd9d2c18a3ccd0fadf64377139e91d&lang=pt_br');
        const temperatura = await resposta.json();
        const temperaturaAtual = temperatura.current.temp + 'ºC';
        const descricaoTempoAtual = temperatura.current.weather[0].description;
        const tempMaximaHoje = Math.round(temperatura.daily[0].temp.max) + 'ºC';
        const tempMinimaHoje = Math.round(temperatura.daily[0].temp.min) + 'ºC';
        return { temperaturaAtual, descricaoTempoAtual, tempMaximaHoje, tempMinimaHoje };
    }
    catch (error) {
        console.error('Erro com a chamada fetch: ', error);
    }
}

async function obterNoticias() {
    try {
        const resposta = await fetch('https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=e10349f1a5334964a73e16a7740b669a&q=Universidade Estadual de Santa Cruz&language=pt');
        const noticias = await resposta.json();
        const noticia = noticias.map((noticia: any) => noticia.latlng);
        console.log("Coordenada: " + coordenada[0]);
        return coordenada;
    }
    catch (error) {
        console.error('Erro com a chamada fetch: ', error);
    }
}

const divNoticias = document.getElementById('listaNoticias');
const divServicos = document.getElementById('listaServicos');

ObterTemperaturaAtual().then(temp => {
    const retornoTemperatura = `Temperatura atual: ${temp?.temperaturaAtual}<br>
    ${temp?.descricaoTempoAtual}<br>
    Máx.: ${temp?.tempMaximaHoje} &nbsp;&nbsp; Min.: ${temp?.tempMinimaHoje}<br>`;
    if (divServicos) {
        divServicos.innerHTML = retornoTemperatura;
    }
});