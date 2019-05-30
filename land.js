var express = require('express')
var app = express()
// adding 


app.set("view engine","ejs")

// app level middleware
app.use(express.static('./pub'));

// getting to do items
app.get('/', function (req, res) {
  res.render("index")
})

app.get('/dk', function (req, res) {
  res.render("dk")
})

 app.get('/yoshi', function (req, res) {
   res.render("yoshi")
 })

app.get('/kirby', function (req, res) {
  res.render("kirby")
})

app.get('/mario', function (req, res) {
  res.render("mario")
})

app.get('/resources', function (req, res) {
  res.render("resources")
})

app.get('/samus', function (req, res) {
  res.render("samus")
})

app.get('/yoshi', function (req, res) {
  res.render("yoshi")
})

app.get('/link', function (req, res) {
  res.render("link")
})



app.listen(3000, 
    console.log("server is live on port 3000")
)