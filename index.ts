const { env } = Deno
const hostname = env.get('SERVER_HOSTNAME')?.toString() || '0.0.0.0'
const port = parseInt(env.get('SERVER_PORT')!, 10) || 8080
const listener = Deno.listen({ hostname, port })

console.log(`Listening on ${hostname}:${port}`)

for await (const conn of listener) {
  Deno.copy(conn, conn)
}
