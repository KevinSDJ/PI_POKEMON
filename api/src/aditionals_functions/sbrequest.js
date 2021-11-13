const axios= require('axios');

function subrequest(url){
    return axios.get(url)
    .then(data=>data.data)
}





module.exports={subrequest}