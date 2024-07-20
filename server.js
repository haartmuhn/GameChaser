const express = require("express");
const app = express();
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const path = require("path"); // Ensure this line is present

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const app = express();
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
app.set('views', path.join(__dirname, 'views'));



async function fetchImages() {
  return [

    { src: '/images/image1.jpg', alt: 'Animal Crossing' },
    { src: '/images/image2.png', alt: 'Ape Escape 3' },
    { src: '/images/image3.jpg', alt: 'Assassins Creed' },
    { src: '/images/image4.jpg', alt: 'Balders Gate' },
    { src: '/images/image5.png', alt: 'Stardew Valley' },
    { src: '/images/image6.png', alt: 'Hearthstone' },
    { src: '/images/image7.png', alt: 'Mario Party 8' },
    { src: '/images/image8.png', alt: 'Wizard 101' },
    { src: '/images/image9.png', alt: 'Call of Duty' },
    { src: '/images/image10.jpg', alt: 'Cyberpunk' },
    { src: '/images/image11.png', alt: 'Diablo IV' },
    { src: '/images/image12.png', alt: 'Donkey Kong' },
    { src: '/images/image13.png', alt: 'Fossil Fighters' },
    { src: '/images/image14.png', alt: 'Halo2' },
    { src: '/images/image15.jpg', alt: 'High on Life' },
    { src: '/images/image16.jpg', alt: 'Phasmophobia' },
    { src: '/images/image17.jpg', alt: 'Pokemon Stadium' },
    { src: '/images/image18.jpg', alt: 'Portal 2' },
    { src: '/images/image19.jpg', alt: 'Street Fighter v Tekken',  },
    { src: '/images/image20.jpg', alt: 'Zelda' },
    { src: '/images/image21.jpg', alt: 'Banjo Kazooie' },
    { src: '/images/image22.png', alt: 'Batman' },
    { src: '/images/image23.png', alt: 'Bomber Man' },
    { src: '/images/image24.png', alt: 'Halo2' },
    { src: '/images/image25.jpg', alt: 'Chip n Dale' },
    { src: '/images/image26.jpg', alt: 'Phasmophobia' },
    { src: '/images/image27.jpg', alt: 'Pokemon Stadium' },
    { src: '/images/image28.jpg', alt: 'Portal 2' },
    { src: '/images/image29.jpg', alt: 'Street Fighter v Tekken',  },
    { src: '/images/image30.jpg', alt: 'Zelda' },
  ];
}
// Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the "public" directory
app.use(express.static('public'));
// Define a route to render the homepage.handlebars template
app.get('/', async (req, res) => {
 
  try {
    const images = await fetchImages();
    const shuffledImages = shuffle(images);
    console.log('Shuffled Images:', shuffledImages); // Debugging line
    res.render('homepage', { games: shuffledImages });
} catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send('Internal Server Error');
}
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
