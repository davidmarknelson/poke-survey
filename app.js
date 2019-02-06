const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');
const ejs             = require('ejs');
const methodOverride  = require('method-override');
const bodyParser      = require('body-parser');
const Fingerprint     = require('express-fingerprint');
const flash           = require('express-flash');
const session         = require('express-session');
const helmet          = require('helmet');
const favicon         = require('express-favicon');
const surveyRoutes    = require('./routes/routes');
const port            = 3000;

// Set up security
app.use(helmet());

// Set up express-fingerprint object
app.use(Fingerprint());

// Set up express-flash
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}));
app.use(flash());

app.use(function(req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// Set up the Method Override settings
app.use(methodOverride('_method'));

// Set view engine and ip settings
app.set('view engine', 'ejs');
app.set('trust proxy', true); 

// Set public file and body-parser settings
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB and Mongoose settings
mongoose.connect('mongodb://localhost/pokesurvey-dev', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Poke-Survey connected to MongoDB');
});

// Routes
app.use(surveyRoutes);

app.listen(port, () => console.log(`Poke-Survey listening on port ${port}!`));