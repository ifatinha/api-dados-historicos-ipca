import { listarHistoricoIPCA, buscarIPCAPorId, buscarIPCAPorAno, calcularValorPorHistorico } from "./services/service.js";
import express from "express";

const app = express();

app.get("/historico", (req, res) => {
    let ano = (parseInt(req.query.ano));

    let historicoAno = ano ? buscarIPCAPorAno(ano) : listarHistoricoIPCA();

    if (historicoAno.length > 0) {
        res.json(historicoAno);
    } else {
        res.status(404).json({ "Error": "Não existe histórico para o ano informado." });
    }
});

app.get("/historico/:id", (req, res) => {
    let id = (parseInt(req.params.id));

    if (isNaN(id)) {
        res.status(404).json({ "Erro": "O valor passado é inválido." });
    } else {
        let historico = buscarIPCAPorId(id);

        if (historico) {
            res.json(historico);
        } else {
            res.status(404).json({ "Error": "Não há historico para o ID informado." });
        }
    }
});

app.get("/calculo", (req, res) => {
    let valor = parseFloat(req.query.valor);
    let mesInicial = parseInt(req.query.mesInicial);
    let anoInicial = parseInt(req.query.anoInicial);
    let mesFinal = parseInt(req.query.mesFinal);
    let anoFinal = parseInt(req.query.anoFinal);

    if (isNaN(valor) || isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal)) {
        res.status(404).json({ "Erro": "Parametros inválidos, todos nos paramentros devem ser números." });
    } else {
        if (anoInicial <= anoFinal) {
            const resultado = calcularValorPorHistorico(valor, mesInicial, anoInicial, mesFinal, anoFinal);
            res.json({ "parametros": resultado });
        } else {
            res.status(404).json({ "Erro": "Falha na requisição. O ano final não pode ser menor que o ano inicial." });
        }
    }
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080!");
})