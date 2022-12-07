import http from 'http';
//import 'colors'; 

http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // const persona ={
    //     id: 1,
    //     nombre: 'Andrés'
    // }
    res.write( 'Hola mundo');
    res.end();
})
    .listen(8080);
console.log('Ejecutandose en el puerto', 8080);