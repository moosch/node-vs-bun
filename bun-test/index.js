const PORT = 3000

console.log(`Bun is running on http://localhost:${PORT}`)

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

export default {
  port: PORT,
  fetch(_req) {
    // const start = Date.now()
    console.time('sqrt')
    const response = sqrt(BigInt(5000000))
    console.timeEnd('sqrt')
    // const end = Date.now()
    return new Response(`Bun Response: ${response}`)
  },
}
