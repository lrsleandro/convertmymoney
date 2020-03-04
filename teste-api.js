const axios = require('axios')

// dataCotacao=%27 data 03-03-2020 mm-dd-aaaa
const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2703-03-2020%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao======`

// URL correta | https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2703-03-2020%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

axios
    .get(url)
    .then( res => console.log(res.data.value[0].cotacaoVenda) )
    .catch( err => console.log(err) )

