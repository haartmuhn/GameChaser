const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const path = require("path"); // Ensure this line is present

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Image data to pass to the template
const games = [
  { id: 1, name: 'Animal Crossing', image: '/images/image1.jpg' },
  { id: 2, name: 'Ape Escape 3', image: '/images/image2.png' },
  { id: 3, name: 'Assassins Creed', image: '/images/image3.jpg' },
  { id: 4, name: 'Balders Gate', image: '/images/image4.jpg' },
  { id: 5, name: 'Stardew Valley', image: '/images/image5.png' },
  { id: 6, name: 'Hearthstone', image: '/images/image6.png' },
  { id: 7, name: 'Mario Party 8', image: '/images/image7.png' },
  { id: 8, name: 'Wizard 101', image: '/images/image8.png' },
  { id: 9, name: 'Call of Duty', image: '/images/image9.png' },
  { id: 10, name: 'Cyberpunk', image: '/images/image10,jpg' },
  { id: 11, name: 'Diablo IV', image: '/images/image11.png' },
  { id: 12, name: 'Donkey Kong', image: '/images/image12.png' },
  { id: 13, name: 'Fossil Fighters', image: '/images/image13.png' },
  { id: 14, name: 'Halo2', image: '/images/image14.png' },
  { id: 15, name: 'High on Life', image: '/images/image15.jpg' },
  { id: 16, name: 'Phasmophobia', image: '/images/image16.jpg' },
  { id: 17, name: 'Pokemon Stadium', image: '/images/image17.jpg' },
  { id: 18, name: 'Portal 2', image: '/images/image18.jpg' },
  { id: 19, name: 'Street Fighter v Tekken', image: '/images/image19.jpg' },
  { id: 20, name: 'Zelda', image: '/images/image20,jpg' },
];


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the "public" directory
app.use(express.static('public'));
// Define a route to render the homepage.handlebars template
app.get('/', (req, res) => {
  res.render('homepage', { games });
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
