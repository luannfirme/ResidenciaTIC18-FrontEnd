async function ObterTemperaturaAtual() {
    try {
        const resposta = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-14.796581726513459&lon=-39.173008679879025&exclude=minutely,hourly&units=metric&appid=70fd9d2c18a3ccd0fadf64377139e91d&lang=pt_br');
        const temperatura = await resposta.json();
        const arrayTemperatura = temperatura.map((previsao: any) => previsao.current.common);
        return arrayTemperatura;
    }
    catch (error) {
        console.error('Erro com a chamada fetch: ', error);
    }
}

async function buscaLatLong(pais: String) {
    try {
        const resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`);
        const longLat = await resposta.json();
        const coordenada = longLat.map((coordenada: any) => coordenada.latlng);
        console.log("Coordenada: " + coordenada[0]);
        return coordenada;
    }
    catch (error) {
        console.error('Erro com a chamada fetch: ', error);
    }
}

async function TraduzirTexto(texto: String) {
    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: texto,
            source: "en",
            target: "pt"
        }),
        headers: { "Content-Type": "application/json" }
    });

    console.log(await res.json());
}

//  buscaPaises().then(paises => paises.forEach((elemento:any) => console.log("P==>: "+elemento)));