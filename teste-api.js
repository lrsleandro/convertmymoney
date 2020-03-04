const axios = require('axios')

// mm-dd-aaaa
const  data  =  '03-02-2020'
const  url  =  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json========`

// URL correta | https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json

axios
    .get(url)
    .then( res => console.log(res.data.value[0].cotacaoVenda) )
    .catch( err => console.log(err) )

