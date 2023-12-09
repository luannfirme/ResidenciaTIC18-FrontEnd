async function ObterTemperaturaAtual() {
    try {
        const resposta = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-14.796581726513459&lon=-39.173008679879025&exclude=minutely,hourly&units=metric&appid=70fd9d2c18a3ccd0fadf64377139e91d&lang=pt_br');
        const temperatura = await resposta.json();
        const temperaturaAtual = Math.round(temperatura.current.temp) + 'ºC';
        const descricaoTempoAtual = temperatura.current.weather[0].description.charAt(0).toUpperCase() + temperatura.current.weather[0].description.slice(1);
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
        const titulosELinks = noticias.articles.map((noticia: any) => {
            return {
                titulo: noticia.title,
                link: noticia.url
            };
        });
        return titulosELinks;
    }
    catch (error) {
        console.error('Erro com a chamada fetch: ', error);
    }
}

const divNoticias = document.getElementById('listaNoticias');
const divServicos = document.getElementById('listaServicos');

ObterTemperaturaAtual().then(temp => {
    const retornoTemperatura = `Temperatura atual:<br>
    <b><font size='15'>${temp?.temperaturaAtual}</font></b><br>
    <b>${temp?.descricaoTempoAtual}</b><br>
    Máx.: <font color='red'>${temp?.tempMaximaHoje}</font> &nbsp;&nbsp; Min.:<font color='blue'> ${temp?.tempMinimaHoje}</font><br>`;
    if (divServicos) {
        divServicos.innerHTML = retornoTemperatura;
    }
});

obterNoticias().then(noticias => noticias.forEach((noticia:any) => {
    const novaNoticia = document.createElement("a");
    novaNoticia.innerHTML = `<b>${noticia.titulo}</b><br>`;
    novaNoticia.href = `${noticia.link}`;
    novaNoticia.target= '_blank';
    if (divNoticias) {
        divNoticias.appendChild(novaNoticia);
    }
}));