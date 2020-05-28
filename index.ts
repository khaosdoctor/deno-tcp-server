const { env } = Deno
const hostname = env.get('SERVER_HOSTNAME') || '0.0.0.0'
const port = env.get('SERVER_PORT') || 8080
const listener = Deno.listen({ hostname, port })
