const request = require('request');
const fs = require('fs');


const url = "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/8654/hours/72?token=ca2f7c5bf97405e14cbff5bef581086e"





request({url: url}, (error, response) => {
  const data = JSON.parse(response.body);

  console.log(data.data[14]);
  //const dataString = JSON.stringify(data);

  //fs.writeFileSync("data.txt", dataString);
}
)
