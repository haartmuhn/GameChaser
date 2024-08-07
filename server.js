const express = require("express");
const app = express();
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const path = require("path"); // Ensure this line is present
const Sequelize = require("sequelize");
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
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookie: { secure: true }, // Set 'secure: true' if you're using HTTPS
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

async function fetchImages() {
  return [
    { src: "/images/image1.jpg", alt: "Animal Crossing" },
    { src: "/images/image2.png", alt: "Ape Escape 3" },
    { src: "/images/image3.jpg", alt: "Assassins Creed" },
    { src: "/images/image4.jpg", alt: "Assassins Creed" },
    { src: "/images/image5.jpg", alt: "Balders Gate" },
    { src: "/images/image6.png", alt: "Banjo Kazooie" },
    { src: "/images/image7.jpg", alt: "Batman" },
    { src: "/images/image8.jpg", alt: "Batman" },
    { src: "/images/image9.jpg", alt: "Batman" },
    { src: "/images/image10.jpg", alt: "Bomberman 64" },
    { src: "/images/image11.png", alt: "Call of Duty" },
    { src: "/images/image12.png", alt: "Call of Duty" },
    { src: "/images/image13.png", alt: "Capcom VS. SNK 2" },
    { src: "/images/image14.png", alt: "Chip n Dale" },
    { src: "/images/image15.jpg", alt: "Conan Exiles" },
    { src: "/images/image16.jpg", alt: "Cyberpunk" },
    { src: "/images/image17.jpg", alt: "Destiny 2" },
    { src: "/images/image18.png", alt: "Diablo IV" },
    { src: "/images/image19.png", alt: "Donkey Kong" },
    { src: "/images/image20.jpg", alt: "Donkey Kong" },
    { src: "/images/image21.jpg", alt: "Dragon Ball FighterZ" },
    { src: "/images/image22.jpg", alt: "EarthBound" },
    { src: "/images/image23.jpg", alt: "Elden Ring" },
    { src: "/images/image24.png", alt: "The Elder Scrolls V Skyrim" },
    { src: "/images/image25.jpg", alt: "Excitebike" },
    { src: "/images/image26.png", alt: "Fall Guys" },
    { src: "/images/image27.jpg", alt: "Fallout 76" },
    { src: "/images/image28.jpg", alt: "Final Fantasy" },
    { src: "/images/image29.jpg", alt: "Final Fantasy" },
    { src: "/images/image30.jpg", alt: "Final Fantasy" },
    { src: "/images/image31.png", alt: "Fossil Fighters" },
    { src: "/images/image32.jpg", alt: "Ghost of Tsushima" },
    { src: "/images/image33.png", alt: "God of War" },
    { src: "/images/image34.jpg", alt: "God of War" },
    { src: "/images/image35.jpg", alt: "Goldeneye" },
    { src: "/images/image36.png", alt: "Grand Theft Auto" },
    { src: "/images/image37.jpg", alt: "Grand Theft Auto" },
    { src: "/images/image38.jpg", alt: "Guilty Gear Strive" },
    { src: "/images/image39.png", alt: "Halo 2" },
    { src: "/images/image40.jpg", alt: "Halo 3" },
    { src: "/images/image41.png", alt: "Halo 3: ODST" },
    { src: "/images/image42.png", alt: "Halo 4" },
    { src: "/images/image43.png", alt: "Halo 5" },
    { src: "/images/image44.jpg", alt: "Halo" },
    { src: "/images/image45.png", alt: "Halo Infinite" },
    { src: "/images/image46.png", alt: "Halo: Reach" },
    { src: "/images/image47.jpg", alt: "High on Life" },
    { src: "/images/image48.png", alt: "The King of Fighters" },
    { src: "/images/image49.png", alt: "Kingdom Hearts" },
    { src: "/images/image50.jpg", alt: "Kingdom Hearts" },
    { src: "/images/image51.jpg", alt: "Kingdom Hearts" },
    { src: "/images/image52.jpg", alt: "The Last of Us" },
    { src: "/images/image53.png", alt: "The Last of Us" },
    { src: "/images/image54.jpg", alt: "Zelda" },

    { src: "/images/image55.jpg", alt: "Zelda" },
    { src: "/images/image56.jpg", alt: "Zelda" },
    { src: "/images/image57.jpg", alt: "Luigis Mansion" },
    { src: "/images/image58.jpg", alt: "Mario Golf" },
    { src: "/images/image59.jpg", alt: "Mario Kart" },
    { src: "/images/image60.png", alt: "Mario Party 8" },
    { src: "/images/image61.png", alt: "Mario Party 10" },
    { src: "/images/image62.jpg", alt: "Mario Party Superstars" },
    { src: "/images/image63.jpg", alt: "Mario Tennis" },
    { src: "/images/image64.jpg", alt: "Mario Tennis" },
    { src: "/images/image65.jpg", alt: "Marvel VS Capcom" },
    { src: "/images/image66.png", alt: "Mega Man X" },
    { src: "/images/image67.png", alt: "Metal Slug" },
    { src: "/images/image68.png", alt: "Punch-Out" },
    { src: "/images/image69.png", alt: "Mortal Kombat" },
    { src: "/images/image70.jpg", alt: "New World" },
    { src: "/images/image71.jpg", alt: "NBA 2K24" },
    { src: "/images/image72.jpg", alt: "Phasmophobia" },
    { src: "/images/image73.png", alt: "Pokemon" },
    { src: "/images/image74.jpg", alt: "Pokemon" },
    { src: "/images/image75.png", alt: "Pokemon" },

    { src: "/images/image76.jpg", alt: "Portal 2" },
    { src: "/images/image77.jpg", alt: "Red Dead Redemption" },
    { src: "/images/image78.png", alt: "Resident Evil" },
    { src: "/images/image79.jpg", alt: "Sonic the Hedgehog" },
    { src: "/images/image80.jpg", alt: "Star Fox" },
    { src: "/images/image81.jpg", alt: "Star Wars" },
    { src: "/images/image82.jpg", alt: "Starfield" },
    { src: "/images/image83.png", alt: "Stardew Valley" },
    { src: "/images/image84.jpg", alt: "Street Fighter" },
    { src: "/images/image85.png", alt: "Street Fighter" },
    { src: "/images/image86.jpg", alt: "Super Mario" },
    { src: "/images/image87.jpg", alt: "Super Mario" },
    { src: "/images/image88.jpg", alt: "Super Metroid" },
    { src: "/images/image89.png", alt: "Super Smash Bros" },
    { src: "/images/image90.jpg", alt: "Super Street Fighter" },
    { src: "/images/image91.jpg", alt: "Tony Hawks Pro Skater" },
    { src: "/images/image92.png", alt: "Tony Hawks Pro Skater" },
    { src: "/images/image93.jpg", alt: "Tony Hawks Pro Skater" },
    { src: "/images/image94.jpg", alt: "Tony Hawks Pro Skater" },
    { src: "/images/image95.jpg", alt: "Tekken 8" },
    { src: "/images/image96.png", alt: "Tomb Raider" },
    { src: "/images/image97.jpg", alt: "Ultimate Marvel VS Capcom" },
    { src: "/images/image98.jpg", alt: "Valheim" },
    { src: "/images/image99.jpg", alt: "The Witcher 3" },
    { src: "/images/image100.png", alt: "Wizard 101" },
    { src: "/images/image101.png", alt: "Hearthstone" },
    { src: "/images/image102.jpg", alt: "Pokemon Stadium" },
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
app.use(express.static("public"));
// Define a route to render the homepage.handlebars template
app.get("/", async (req, res) => {
  try {
    const images = await fetchImages();
    const shuffledImages = shuffle(images);
    console.log(req.session.isLoggedIn); // Debugging line
    console.log("Shuffled Images:", shuffledImages); // Debugging line
    res.render("homepage", {
      games: shuffledImages,
      isLoggedIn: req.session.isLoggedIn,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
