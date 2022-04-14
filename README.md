# week4_day4


## Main points: Ironlauncher

El [Ironlauncher](https://www.npmjs.com/package/ironlauncher) es un generador profesional de servidores. 

Instalado como un paquete global `npm i ironlauncher -g` permite disponer de un boilerplate completo para servidores ExpressJS. 

Uso:
- Comenzar un proyecto con el comando `ironlauncher nombre-proyecto`.
- Modificar el archivo `.env` ajustando la variable `PORT` y creando la variable `MONGODB_URI` con el string de conexión de MongoDB.
- Modificar el nombre de la aplicación en `app.js`.
- Levantar el servidor con `npm run dev`


## Main points: GET requests (route params & query strings)

- Los Route Params & Query Strings permiten enviar información en una petición de tipo GET desde el navegador al servidor, a través de la URL.
  ````javascript
  // URL: http://localhost:3000/endpoint/value1/whatever/value2?color=white&adults=no

  router.get('/endpoint/:param1/whatever/:param2', (req, res) => {

    console.log(req.params)   // { param1: 'value1', param2: 'value2' }
    console.log(req.query)    // { color: 'white', adults: 'no' }
  })
  ````

## Main points: POST requests (request body)
- El objeto `req.body` contiene la información enviada mediante una petición de tipo `POST` desde el navegador al servidor.
- Cada clave del objeto es el valor del atributo `name` del `input`, asumiendo como su valor el del propio `input`.


## Main points: *seeding*
- Crear un archivo dotado de:
   - Conexión a la BBDD (**misma BBDD de la aplicación**)
   - Modelo
   - Operación para la creación de los registros
   
- Ejecutar el archivo mediante `node config/seeds.js`
  
## Apuntes finales
- La etiqueta `form` dispone de dos atributos: `action` (destino de la información) y `method` (método de envío)
- Crear un formulario integrado en una aplicación web supone revisar tres aspectos fundamentales:
  - Valor del atributo `action`del formulario.
  - Valor del atributo `method` del formulario.
  - Valor del atributo `name` de cada input de formulario. 
- Es posible disponer de dos controladores para un mismo *endpoint* (`GET`/`POST`)
