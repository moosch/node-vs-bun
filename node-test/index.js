const http = require('http')

const PORT = 4000;

function sqrt(value) {
  if (value < 0n) {
      throw 'square root of negative numbers is not supported'
  }

  if (value < 2n) {
      return value;
  }

  function newtonIteration(n, x0) {
      const x1 = ((n / x0) + x0) >> 1n;
      if (x0 === x1 || x0 === (x1 - 1n)) {
          return x0;
      }
      return newtonIteration(n, x1);
  }

  return newtonIteration(value, 1n);
}

const requestListener = (_req, res) => {
  console.time('sqrt')
  const response = sqrt(BigInt(5000000))
  console.timeEnd('sqrt')
  res.writeHead(200)
  res.end(`Node Response: ${response}`)
}

const server = http.createServer(requestListener)
server.listen(PORT)
console.log(`Node is running on http://localhost:${PORT}`);
