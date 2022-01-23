const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { send } = require('process');
const { response } = require('express');
const cotacao = '/last/USD-BRL,EUR-BRL,BTC-BRL';
const conversao = '/USD-BRL/1';
const app = express()

function user() {
    var USDBRL = new Array;
    var EURBRL = new Array;
    var BTCBRL = new Array;
    axios.get(`https://economia.awesomeapi.com.br${cotacao}`).then(function (response) {
        USDBRL = response.data.USDBRL
        EURBRL = response.data.EURBRL
        BTCBRL = response.data.BTCBRL
    }).catch((erro) => {
        console.error(erro);
    });
};
function conv() {
    axios.get(`https://economia.awesomeapi.com.br${conversao}`)
        .then((response) => {
            console.log(response.data);
        }).catch((erro) => {
            console.error(erro);
        });
};