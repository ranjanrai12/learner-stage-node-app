const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=5f3307759bba80193ce3828b0336bcb1&query=-48,-75&units=f`


const request = http.request(url, (response) => {
    let data = '';
    // response.on is a function to allow us to register a handler
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        console.log(JSON.parse(data));
    });
});

request.on('error', (error) => {
    console.log("Erro occured :", error );
    
})
request.end();