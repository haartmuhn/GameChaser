const { Platform } = require('../models');

const platformsData = [
    { name: 'Dreamcast' },
    { name: 'Game Boy' },
    { name: 'Game Boy Advance' },
    { name: 'Game Boy Color' },
    { name: 'GameCube' },
    { name: 'Neo Geo' },
    { name: 'NES' },
    { name: 'Nintendo 3DS' },
    { name: 'Nintendo 64' },
    { name: 'Nintendo DS' },
    { name: 'Nintendo Switch' },
    { name: 'PC' },
    { name: 'PlayStation' },
    { name: 'PlayStation 2' },
    { name: 'PlayStation 3' },
    { name: 'PlayStation 4' },
    { name: 'PlayStation 5' },
    { name: 'Sega Genesis' },
    { name: 'Sega Saturn' },
    { name: 'SNES' },
    { name: 'Wii' },
    { name: 'Wii U' },
    { name: 'Xbox' },
    { name: 'Xbox 360' },
    { name: 'Xbox One' },
    { name: 'Xbox Series X/S' },
];

const seedPlatforms = () => Platform.bulkCreate(platformsData);

module.exports = seedPlatforms;