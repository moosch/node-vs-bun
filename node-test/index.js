const http = require('http')

const PORT = 4000;

const requestListener = (_req, res) => {
  res.writeHead(200)
  res.end('Hello from Node!')
}

const server = http.createServer(requestListener)
server.listen(PORT)
console.log(`Node is running on http://localhost:${PORT}`);
