try {
  // intenta acceder a las variables del archivo .env
  process.loadEnvFile()
} catch (error) {
  console.warn("archivo .env no encontrado, usando variables predeterminadas")
}

const jsonServer = require("json-server")

// creamos el servidor con json-server
const server = jsonServer.create()

// aqui se añaden las configuraciones básicas de un servidor
const middlewares = jsonServer.defaults()
server.use(middlewares)

// aqui se añaden todas las rutas básicas de CRUD de la data y gestiona la base de datos en el archivo db.json
const routes = jsonServer.router("db.json")
server.use(routes)

const PORT = process.env.PORT || 5005

// activamos el servidor para que escuche continuamente llamadas de clientes
server.listen(PORT, () => {
  console.log(`JSON server ejecutandose en el puerto ${PORT}`)
  console.log(`Acceso Local en url http://localhost:${PORT}`)
})
