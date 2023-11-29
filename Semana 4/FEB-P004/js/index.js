document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.roteiro-comprar');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const pacote = this.closest('.roteiros-viagens');
            const destino = pacote.querySelector('.roteiro-destino').textContent;
            const preco = pacote.querySelector('.roteiro-preco').textContent;
            const observacoes = pacote.querySelector('.roteiro-obs').textContent;
            const parcelamento = pacote.querySelector('.roteiro-parcelamento').textContent;

            const inclusos = [];
            const listaInclusos = pacote.querySelectorAll('.roteiro-incluso li');
            listaInclusos.forEach(item => {
                inclusos.push(item.textContent.trim());
            });

            const informacoesPacote = {
                Destino: destino,
                Preco: preco,
                Observacoes: observacoes,
                Parcelamento: parcelamento,
                ItensInclusos: inclusos
            };

            console.log(informacoesPacote);
        });
    });
});