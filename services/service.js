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

function calcularValorPorHistorico(valor, mesInicial, anoInicial, mesFinal, anoFinal){
    
}

export { listarHistoricoIPCA, buscarIPCAPorId, buscarIPCAPorAno, calcularValorPorHistorico };