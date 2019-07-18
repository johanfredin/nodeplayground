var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express()

// Will log a message every time page is visited
// var logger = function(req, res, next) {
//     console.log('Logging...')
//     next()
// }
// app.use(logger)

// View engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set static path
// app.use(express.static(path.join(__dirname, 'public')))

var users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@gmail.com'
    },
    {
        id: 3,
        firstName: 'Jill',
        lastName: 'Jones',
        email: 'jille@gmail.com'
    }
]

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    });
})

app.post('/users/add', function(req, res) {
    var newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }

    console.log(newUser)
})

// Starts the server
app.listen(3000, function(){
    console.log('Server started on port 3000....')
})

