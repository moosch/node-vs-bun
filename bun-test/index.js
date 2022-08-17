const PORT = 3000

console.log(`Bun is running on http://localhost:${PORT}`)

export default {
  port: PORT,
  fetch(_req) {
    return new Response(`Hello from Bun!`)
  },
}
