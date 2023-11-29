function adicionarPacoteTuristico() {
    const imagemURL = document.getElementById('imagemURL').value;
    const destino = document.getElementById('destino').value;
    const incluso1 = document.getElementById('incluso1').value;
    let incluso2 = parseInt(document.getElementById('incluso2').value);

    if (incluso2 < 10)
        incluso2 = '0' + incluso2

    const incluso3 = document.getElementById('incluso3').value;
    const preco = document.getElementById('preco').value;
    const taxas = document.getElementById('taxas').value;
    const parcelas = document.getElementById('parcelas').value;

    const novoPacote = document.createElement("div");
    novoPacote.classList.add("roteiros-viagens");
    const novoPacoteObjeto = {
        imagemURL,
        destino,
        incluso1,
        incluso2,
        incluso3,
        preco,
        taxas,
        parcelas
    };

    const pacotesTurismo = JSON.parse(localStorage.getItem('pacotesTurismo')) || [];
    pacotesTurismo.push(novoPacoteObjeto);
    localStorage.setItem('pacotesTurismo', JSON.stringify(pacotesTurismo));
}

document.getElementById("formularioDestino").addEventListener("submit", function (event) {
    event.preventDefault();
    adicionarPacoteTuristico();
    criarPacotesNoDOM();
});

function criarPacotesNoDOM() {
    const pacotesTurismo = JSON.parse(localStorage.getItem('pacotesTurismo')) || [];

    pacotesTurismo.forEach(pacote => {
        const novoPacote = criarElementoPacote(pacote);
        document.querySelector(".container-destinos").appendChild(novoPacote);
    });
}

function criarElementoPacote(pacote) {
    const novoPacote = document.createElement("div");
    novoPacote.classList.add("roteiros-viagens");

    novoPacote.innerHTML = `
    <img src="${pacote.imagemURL}" class="postal">
    <div class="roteiro-destino">${pacote.destino.charAt(0).toUpperCase() + pacote.destino.slice(1)}</div>
    <ul class="roteiro-incluso">
        <li> ${pacote.incluso1.charAt(0).toUpperCase() + pacote.incluso1.slice(1)}</li>
        <li> ${pacote.incluso2} diárias</li>
        <li> ${pacote.incluso3.charAt(0).toUpperCase() + pacote.incluso3.slice(1)}</li>
    </ul>
    <div class="roteiro-preco">R$${pacote.preco}</div>
    <div class="roteiro-obs">${pacote.taxas.charAt(0).toUpperCase() + pacote.taxas.slice(1)}</div>
    <div class="roteiro-parcelamento">Em até ${pacote.parcelas}x sem Juros</div>
    <center><button class="roteiro-comprar">Comprar</button></center>
    `;

    return novoPacote;
}

window.addEventListener('load', criarPacotesNoDOM);