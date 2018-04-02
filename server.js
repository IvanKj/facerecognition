const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/Register');
const signin = require('./controllers/SignIn');
const profile = require('./controllers/Profile');
const image = require('./controllers/Image');


const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: '',
		database: 'SmartBrain'
	}
})

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res)=> { res.send(database.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfile(db))
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleImage(req,res, db) })
app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})