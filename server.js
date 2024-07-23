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
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    httpOnly: true,
    sameSite: 'strict'
  },
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
    { src: '/images/image83.png', alt: 'Stardew Valley' },
    { src: '/images/image101.png', alt: 'Hearthstone' },
    { src: '/images/image60.png', alt: 'Mario Party 8' },
    { src: '/images/image100.png', alt: 'Wizard 101' },
    { src: '/images/image11.png', alt: 'Call of Duty' },
    { src: '/images/image16.jpg', alt: 'Cyberpunk' },
    { src: '/images/image18.png', alt: 'Diablo IV' },
    { src: '/images/image19.png', alt: 'Donkey Kong' },
    { src: '/images/image31.png', alt: 'Fossil Fighters' },
    { src: '/images/image39.png', alt: 'Halo2' },
    { src: '/images/image47.jpg', alt: 'High on Life' },
    { src: '/images/image72.jpg', alt: 'Phasmophobia' },
    { src: '/images/image102.jpg', alt: 'Pokemon Stadium' },
    
    { src: '/images/image76.jpg', alt: 'Portal 2' },
    { src: '/images/image84.jpg', alt: 'Street Fighter v Tekken',  },
    { src: '/images/image55.jpg', alt: 'Zelda' },
    { src: '/images/image6.png', alt: 'Banjo Kazooie' },
    { src: '/images/image7.jpg', alt: 'Batman' },
    { src: '/images/image10.jpg', alt: 'Bomber Man' },
    
    { src: '/images/image14.png', alt: 'Chip n Dale' },
    { src: '/images/image68.png', alt: 'Punch-Out' },
    
   
   
   
    
    { src: '/images/image24.png', alt: 'The Elder Scrolls V Skyrim' },
    
   
    
    
    
    
   
    
   
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
    res.render('homepage', { games: shuffledImages, isLoggedIn: req.session.isLoggedIn });
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
