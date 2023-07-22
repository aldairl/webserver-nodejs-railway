const http = require("http");

http
  .createServer((req, res) => {
    
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })
    
    // res.write("id, nombre\n");
    // res.write("1, laura\n");
    // res.write("2, juan\n");
    // res.write("3, camilo\n");
    // res.write("4, andres\n");

    res.write('hola mundo')
    
    res.end()
  })
  .listen(5000);

  console.log("listening in port 5000")
