const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// route params raw exmaple 1
router.get('/vuelos/origen/:from_city/destino/:to_city/:date', (req, res) => {

  const { from_city, to_city, date } = req.params

  console.log('--------------')
  console.log('Estos son los route params:', req.params)
  console.log(`Debes, por tanto, mandar a la BBDD una consulta para vuelos de ${from_city} a ${to_city} para el día ${date}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS ROUTE PARAMS, MERLUZ@')

})


// route params raw exmaple 2
router.get('/usuarios/:username', (req, res) => {
  res.send(`El usuario es ${req.params.username}`)
})


// query strings raw example
router.get('/tienda', (req, res) => {

  const { clothe, color, season, size } = req.query

  console.log('--------------')
  console.log('Estos son los query strings:', req.query)
  console.log(`Debes, por tanto, mostrar los ${clothe} de color ${color}, talla ${size} y temporada ${season}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS QUERY STRINGS, MERLUZ@')

})



// search form: render
router.get('/buscador', (req, res) => {
  res.render('search-form')
})

// search form: handling
router.get('/resultados', (req, res) => {

  // Con estos valores performarías una quesry o consulta a la BBDD o a la API externa
  const { clothe, season, size, color } = req.query

  res.render('search-results', { clothe, season, size, color })
})





// signup form: render
router.get('/registro', (req, res) => {
  res.render('signup-form')
})

// signup form: handling
router.post('/registro', (req, res) => {
  const { username, userPassword } = req.body
  res.send(`El nombre de usuario es ${username} y la contraseña ${userPassword}, aunque no se muestran en la URL`)
})

module.exports = router;
