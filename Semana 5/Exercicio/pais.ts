async function buscaPaises(){
   try{
       const resposta = await fetch('https://restcountries.com/v3.1/all');
       const paises = await resposta.json();
       const arrayNomePaises = paises.map( (pais:any) => pais.name.common);
       return arrayNomePaises;
   }
   catch(error){
       console.error('Erro com a chamada fetch: ', error);
   }
}

async function buscaLatLong(pais :String){
    try{
        const resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`);
        const longLat = await resposta.json();
        const coordenada = longLat.map( (coordenada:any) => coordenada.latlng);
        console.log("Coordenada: " + coordenada[0]);
        return coordenada;
    }
    catch(error){
        console.error('Erro com a chamada fetch: ', error);
    }
 }

buscaPaises().then(paises => paises.forEach((elemento:any) => console.log("P==>: "+elemento)));