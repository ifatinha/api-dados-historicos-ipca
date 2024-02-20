import historicoIPCA from "../data/historicoIPCA.js";

function listarHistoricoIPCA() {
    return historicoIPCA;
}

function buscarIPCAPorId(id) {
    return historicoIPCA.find((historico) => {
        return historico.id === id;
    })
}

function buscarIPCAPorAno(ano) {
    const historicoAno = historicoIPCA.filter((historico) => {
        return historico.ano === ano;
    });

    return historicoAno;
}

function calcularValorPorHistorico(valor, mesInicial, anoInicial, mesFinal, anoFinal) {
    //fazer com slice e findIndex
    //resultado = valor * ((1 + (ipca1/100)) * (1 + (ipca2/100)) * ... * (1 + (ipcaN/100)))
}

export { listarHistoricoIPCA, buscarIPCAPorId, buscarIPCAPorAno, calcularValorPorHistorico };