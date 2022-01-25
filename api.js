const cotacao = '/last/USD-BRL,EUR-BRL,BTC-BRL';
const conversao = '/USD-BRL/1'; //ou /EUR-BRL/

function user() {
    axios.get(`https://economia.awesomeapi.com.br${cotacao}`).then(function (response) {
        //console.log(response.data.USDBRL)
        document.getElementById('cotas').innerHTML = `Dolar: <br id="cotas">${response.data.USDBRL.bid} </br>`;
    }).catch((erro) => {
        console.error(erro);
    });
};
function conv() {
    let money = document.getElementById('money').value;
    let moneyConvertido = 0;
    let cotacao = 0;
    if (money != "") {
        // console.log('entro no if')
        axios.get(`https://economia.awesomeapi.com.br/${conversao}`)
            .then((response) => {
                //console.log(response.data);
                cotacao = response.data[0].bid;
                moneyConvertido = money / cotacao
                document.getElementById('cotacao').innerHTML = cotacao;
                document.getElementById('conversao').innerHTML = `R$ ${moneyConvertido.toFixed(2)}`;
            }).catch((erro) => {
                console.error(erro);
            });
    } else {
        //console.log('entro no else')
        document.getElementById('cotacao').innerHTML = "Adicione um valor em R$";
    }
};
user()