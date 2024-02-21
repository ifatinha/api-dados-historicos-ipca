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

function buscarHistoricoIndex(mes, ano) {
    return historicoIPCA.findIndex((historico) => {
        return (historico.ano === ano && historico.mes === mes);
    })
}

function buscarHistoricoIntervalo(indexAnoInicial, indexAnoFinal) {
    return historicoIPCA.slice(indexAnoInicial, indexAnoFinal + 1);
}

function calcularValorPorHistorico(valor, mesInicial, anoInicial, mesFinal, anoFinal) {
    let indexAnoInicial = buscarHistoricoIndex(mesInicial, anoInicial);
    let indexAnoFinal = buscarHistoricoIndex(mesFinal, anoFinal);
    let intervalo = buscarHistoricoIntervalo(indexAnoInicial, indexAnoFinal);

    let resultado = intervalo.reduce((total, historico) => {
        return total * (1 + (historico.ipca / 100));
    }, valor);

    return (resultado.toFixed(2));
}

export { listarHistoricoIPCA, buscarIPCAPorId, buscarIPCAPorAno, calcularValorPorHistorico };