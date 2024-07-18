const { Title } = require('../models');

const titlesData = [
    {
        name: 'Animal Crossing: New Horizons',
        genreId: 13,
        decade_created: '2020s',
        rating: 9,
        platforms: [11], // Nintendo Switch
    },
    {
        name: 'Ape Escape 3',
        genreId: 6,
        decade_created: '2000s',
        rating: 8.3,
        platforms: [14], // PS2
    },
    {
        name: 'Assassin\'s Creed Origins',
        genreId: 2,
        decade_created: '2010s',
        rating: 9,
        platforms: [12, 16, 25], // PC, PS4, Xbox One
    },
    {
        name: 'Assassin\'s Creed Unity',
        genreId: 2,
        decade_created: '2010s',
        rating: 7.8,
        platforms: [12, 16, 25], // PC, PS4, Xbox One
    },
    {
        name: 'Baldur\'s Gate III',
        genreId: 2,
        decade_created: '2020s',
        rating: 10,
        platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
    },
    {
        name: 'Banjo-Kazooie',
        genreId: 1,
        decade_created: '1990s',
        rating: 9.6,
        platforms: [9, 24], // N64, Xbox 360
    },
    {
        name: 'Batman: Arkham Asylum',
        genreId: 1,
        decade_created: '2000s',
        rating: 9.3,
        platforms: [11, 12, 15, 16, 24, 25], // Nintendo Switch, PC, PS3, PS4, Xbox 360, Xbox One
    },
    {
        name: 'Batman: Arkham City',
        genreId: 1,
        decade_created: '2010s',
        rating: 9.5,
        platforms: [11, 12, 15, 16, 24, 25], // Nintendo Switch, PC, PS3, PS4, Xbox 360, Xbox One
    },
    {
        name: 'Batman: Arkham Knight',
        genreId: 1,
        decade_created: '2010s',
        rating: 9.5,
        platforms: [11, 12, 16, 25], // Nintendo Switch, PC, PS4, Xbox One
    },
    {
        name: 'Bomberman 64',
        genreId: 1,
        decade_created: '1990s',
        rating: 7.6,
        platforms: [9], // N64
    },
    {
        name: 'Call of Duty: Black Ops',
        genreId: 4,
        decade_created: '2010s',
        rating: 8.5,
        platforms: [12, 15, 24], // PC, PS3, Xbox 360
    },
    {
        name: 'Call of Duty: Black Ops II',
        genreId: 4,
        decade_created: '2010s',
        rating: 9.3,
        platforms: [12, 15, 24], // PC, PS4, Xbox 360
    },
    {
        name: 'Capcom VS. SNK 2: Mark of the Millennium 2001',
        genreId: 3,
        decade_created: '2000s',
        rating: 8.4,
        platforms: [5, 14, 23], // GameCube, PS2, Xbox
    },
    {
        name: 'Chip \'n Dale Rescue Rangers',
        genreId: 6,
        decade_created: '1990s',
        rating: 7,
        platforms: [7], // NES
    },
    {
        name: 'Conan Exiles',
        genreId: 1,
        decade_created: '2010s',
        rating: 6.7,
        platforms: [12, 16, 25, 26], // PC, PS4, Xbox One, Xbox Series X/S
    },
    {
        name: 'Cyberpunk 2077',
        genreId: 2,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Destiny 2',
        genreId: 4,
        decade_created: '2010s',
        rating: 8.5,
        platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Diablo IV',
        genreId: 2,
        decade_created: '2020s',
        rating: 9,
        platforms: [16, 17, 25, 26], // PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Donkey Kong Country',
        genreId: 6,
        decade_created: '1990s',
        rating: 8,
        platforms: [3, 4, 20], // Game Boy Advance, Game Boy Color, SNES
    },
    {
        name: 'Donkey Kong Country 2: Diddy\'s Kong Quest',
        genreId: 6,
        decade_created: '1990s',
        rating: 8,
        platforms: [3, 20], // Game Boy Advance, SNES
    },
    {
        name: 'Dragon Ball FighterZ',
        genreId: 3,
        decade_created: '2010s',
        rating: 8.5,
        platforms: [11, 12, 16, 17, 25, 26], // Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'EarthBound',
        genreId: 10,
        decade_created: '1990s',
        rating: 9,
        platforms: [3, 20], // Game Boy Advance, SNES
    },
    {
        name: 'Elden Ring',
        genreId: 2,
        decade_created: '2020s',
        rating: 10,
        platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'The Elder Scrolls V: Skyrim',
        genreId: 2,
        decade_created: '2010s',
        rating: 9.5,
        platforms: [12, 15, 16, 17, 24, 25, 26], // PC, PS3, PS4, PS5, Xbox 360, Xbox One, Xbox Series X/S
    },
    {
        name: 'Excitebike',
        genreId: 8,
        decade_created: '1980s',
        rating: 8.4,
        platforms: [7], // NES
    },
    {
        name: 'Fall Guys',
        genreId: 6,
        decade_created: '2020s',
        rating: 8,
        platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Fallout 76',
        genreId: 2,
        decade_created: '2010s',
        rating: 7,
        platforms: [12, 16, 25], // PC, PS4, Xbox One
    },
    {
        name: 'Final Fantasy II',
        genreId: 10,
        decade_created: '1990s',
        rating: 8.3,
        platforms: [20], // SNES
    },
    {
        name: 'Final Fantasy III',
        genreId: 10,
        decade_created: '1990s',
        rating: 9.5,
        platforms: [3, 11, 12, 13, 16, 20], // Game Boy Advance, Nintendo Switch, PC, PS1, PS4, SNES
    },
    {
        name: 'Final Fantasy VII',
        genreId: 10,
        decade_created: '1990s',
        rating: 8.2,
        platforms: [11, 12, 15, 16, 25], // Nintendo Switch, PC, PS3, PS4, Xbox One
    },
    {
        name: 'Fossil Fighters',
        genreId: 10,
        decade_created: '2000s',
        rating: 7.7,
        platforms: [10], // Nintendo DS
    },
    {
        name: 'Ghost of Tsushima',
        genreId: 6,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 16, 17], // PC, PS4, PS5
    },
    {
        name: 'God of War',
        genreId: 6,
        decade_created: '2010s',
        rating: 10,
        platforms: [12, 16], // PC, PS4
    },
    {
        name: 'God of War Ragnarök',
        genreId: 6,
        decade_created: '2020s',
        rating: 10,
        platforms: [12, 16, 17], // PC, PS4, PS5
    },
    {
        name: 'GoldenEye 007',
        genreId: 4,
        decade_created: '1990s',
        rating: 9.7,
        platforms: [9], // N64
    },
    {
        name: 'Grand Theft Auto: San Andreas',
        genreId: 6,
        decade_created: '2000s',
        rating: 9.6,
        platforms: [14], // PS2
    },
    {
        name: 'Grand Theft Auto: Vice City',
        genreId: 6,
        decade_created: '2000s',
        rating: 9.7,
        platforms: [14], // PS2
    },
    {
        name: 'Guilty Gear Strive',
        genreId: 3,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Halo 2',
        genreId: 4,
        decade_created: '2000s',
        rating: 9.8,
        platforms: [16, 23], // PC, Xbox
    },
    {
        name: 'Halo 3',
        genreId: 4,
        decade_created: '2000s',
        rating: 9.5,
        platforms: [24], // Xbox 360
    },
    {
        name: 'Halo 3: ODST',
        genreId: 4,
        decade_created: '2000s',
        rating: 9,
        platforms: [24], // Xbox 360
    },
    {
        name: 'Halo 4',
        genreId: 4,
        decade_created: '2010s',
        rating: 9.8,
        platforms: [24], // Xbox 360
    },
    {
        name: 'Halo 5',
        genreId: 4,
        decade_created: '2010s',
        rating: 9,
        platforms: [25], // Xbox One
    },
    {
        name: 'Halo: Combat Evolved',
        genreId: 4,
        decade_created: '2000s',
        rating: 9.7,
        platforms: [12, 23, 24], // PC, Xbox, Xbox 360
    },
    {
        name: 'Halo Infinite',
        genreId: 4,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 25, 26], // PC, Xbox One, Xbox Series X/S
    },
    {
        name: 'Halo: Reach',
        genreId: 4,
        decade_created: '2010s',
        rating: 9.5,
        platforms: [24], // Xbox 360
    },
    {
        name: 'High on Life',
        genreId: 4,
        decade_created: '2020s',
        rating: 8,
        platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'The King of Fighters XV',
        genreId: 3,
        decade_created: '2020s',
        rating: 8,
        platforms: [12, 16, 17, 26], // PC, PS4, PS5, Xbox Series X/S
    },
    {
        name: 'Kingdom Hearts',
        genreId: 2,
        decade_created: '2000s',
        rating: 9,
        platforms: [3, 10, 11, 12, 14, 15, 16, 25], // Game Boy Advance, Nintendo DS, Nintendo Switch, PC, PS2, PS3, PS4, Xbox One
    },
    {
        name: 'Kingdom Hearts II',
        genreId: 2,
        decade_created: '2000s',
        rating: 9.1,
        platforms: [14], // PS2
    },
    {
        name: 'Kingdom Hearts III',
        genreId: 2,
        decade_created: '2010s',
        rating: 8.7,
        platforms: [11, 12, 16, 25], // Nintendo Switch, PC, PS4, Xbox One
    },
    {
        name: 'The Last of Us',
        genreId: 1,
        decade_created: '2010s',
        rating: 10,
        platforms: [15, 16], // PS3, PS4
    },
    {
        name: 'The Last of Us Part II',
        genreId: 1,
        decade_created: '2020s',
        rating: 10,
        platforms: [16, 17], // PS4, PS5
    },
    {
        name: 'The Legend of Zelda: A Link to the Past',
        genreId: 1,
        decade_created: '1990s',
        rating: 9.5,
        platforms: [20], // SNES
    },
    {
        name: 'The Legend of Zelda: Breath of the Wild',
        genreId: 1,
        decade_created: '2010s',
        rating: 10,
        platforms: [11], // Nintendo Switch
    },
    {
        name: 'The Legend of Zelda: Ocarina of Time',
        genreId: 1,
        decade_created: '1990s',
        rating: 10,
        platforms: [5, 9], // GameCube, N64
    },
    {
        name: 'Luigi\'s Mansion',
        genreId: 1,
        decade_created: '2000s',
        rating: 7,
        platforms: [5, 8], // GameCube, Nintendo 3DS
    },
    {
        name: 'Mario Golf',
        genreId: 14,
        decade_created: '1990s',
        rating: 8,
        platforms: [4, 9], // Game Boy Color, N64
    },
    {
        name: 'Mario Kart 8 Deluxe',
        genreId: 8,
        decade_created: '2010s',
        rating: 9.3,
        platforms: [11], // Nintendo Switch
    },
    {
        name: 'Mario Party 8',
        genreId: 5,
        decade_created: '2000s',
        rating: 5.2,
        platforms: [21], // Wii
    },
    {
        name: 'Mario Party 10',
        genreId: 5,
        decade_created: '2010s',
        rating: 6.5,
        platforms: [22], // Wii U
    },
    {
        name: 'Mario Party Superstars',
        genreId: 5,
        decade_created: '2020s',
        rating: 8,
        platforms: [11], // Nintendo Switch
    },
    {
        name: 'Mario Tennis',
        genreId: 14,
        decade_created: '2000s',
        rating: 9,
        platforms: [4, 9], // Game Boy Color, N64
    },
    {
        name: 'Mario Tennis Aces',
        genreId: 14,
        decade_created: '2010s',
        rating: 7.5,
        platforms: [11], // Nintendo Switch
    },
    {
        name: 'Marvel VS Capcom 2: New Age of Heroes',
        genreId: 3,
        decade_created: '2000s',
        rating: 9,
        platforms: [1, 14, 15, 23, 24], // Dreamcast, PS2, PS3, Xbox, Xbox 360
    },
    {
        name: 'Mega Man X',
        genreId: 6,
        decade_created: '1990s',
        rating: 9,
        platforms: [5, 11, 12, 13, 14, 16, 20, 25], // GameCube, Nintendo Switch, PC, PS1, PS2, PS4, SNES, Xbox One
    },
    {
        name: 'Metal Slug',
        genreId: 11,
        decade_created: '1990s',
        rating: 8.5,
        platforms: [6, 13, 19], // Neo Geo, PS1, Sega Saturn
    },
    {
        name: 'Mike Tyson\'s Punch-Out!!',
        genreId: 14,
        decade_created: '1980s',
        rating: 8.1,
        platforms: [7], // NES
    },
    {
        name: 'Mortal Kombat 1',
        genreId: 3,
        decade_created: '2020s',
        rating: 8,
        platforms: [11, 12, 17, 26], // Nintendo Switch, PC, PS5, Xbox Series X/S
    },
    {
        name: 'New World',
        genreId: 10,
        decade_created: '2020s',
        rating: 6,
        platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
    },
    {
        name: 'NBA 2K24',
        genreId: 14,
        decade_created: '2020s',
        rating: 6,
        platforms: [11, 12, 16, 17, 25, 26], // Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Phasmophobia',
        genreId: 7,
        decade_created: '2020s',
        rating: 7.6,
        platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
    },
    {
        name: 'Pokémon Red, Blue, and Yellow',
        genreId: 10,
        decade_created: '1990s',
        rating: 10,
        platforms: [2, 4, 8], // Game Boy, Game Boy Color, Nintendo 3DS
    },
    {
        name: 'Pokémon Ruby and Sapphire',
        genreId: 10,
        decade_created: '2000s',
        rating: 5,
        platforms: [3], // Game Boy Advance
    },
    {
        name: 'Pokémon Snap',
        genreId: 9,
        decade_created: '1990s',
        rating: 7.8,
        platforms: [9], // N64
    },
    {
        name: 'Portal 2',
        genreId: 7,
        decade_created: '2010s',
        rating: 9.5,
        platforms: [11, 12, 15, 24], // Nintendo 64, PC, PS3, Xbox 360
    },
    {
        name: 'Red Dead Redemption 2',
        genreId: 1,
        decade_created: '2010s',
        rating: 10,
        platforms: [12, 16, 25], // PC, PS4, Xbox One
    },
    {
        name: 'Resident Evil',
        genreId: 1,
        decade_created: '1990s',
        rating: 8.7,
        platforms: [10, 12, 13, 19], // Nintendo DS, PC, PS1, Sega Saturn
    },
    {
        name: 'Sonic the Hedgehog',
        genreId: 6,
        decade_created: '1990s',
        rating: 8,
        platforms: [3, 8, 11, 12, 18], // Game Boy Advance, Nintendo 3DS, Nintendo Switch, PC, Sega Genesis
    },
    {
        name: 'Star Fox 64',
        genreId: 9,
        decade_created: '1990s',
        rating: 8.7,
        platforms: [9], // N64
    },
    {
        name: 'Star Wars Episode I: Racer',
        genreId: 8,
        decade_created: '1990s',
        rating: 7.3,
        platforms: [1, 4, 9, 11, 12, 16, 25], // Dreamcast, Game Boy Color, N64, Nintendo Switch, PC, PS4, Xbox One
    },
    {
        name: 'Starfield',
        genreId: 2,
        decade_created: '2020s',
        rating: 7,
        platforms: [12, 26], // PC, Xbox Series X/S
    },
    {
        name: 'Stardew Valley',
        genreId: 13,
        decade_created: '2010s',
        rating: 10,
        platforms: [12], // PC
    },
    {
        name: 'Street Fighter 6',
        genreId: 3,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 16, 17, 26], // PC, PS4, PS5, Xbox Series X/S
    },
    {
        name: 'Street Fighter III: 3rd Strike',
        genreId: 3,
        decade_created: '1990s',
        rating: 8.9,
        platforms: [1, 11, 12, 14, 15, 16, 23, 24, 25], // Dreamcast, Nintendo Switch, PC, PS2, PS3, PS4, Xbox, Xbox 360, Xbox One
    },
    {
        name: 'Super Mario 64',
        genreId: 6,
        decade_created: '1990s',
        rating: 9.8,
        platforms: [9], // N64
    },
    {
        name: 'Super Mario Sunshine',
        genreId: 6,
        decade_created: '2000s',
        rating: 9.4,
        platforms: [5], // GameCube
    },
    {
        name: 'Super Metroid',
        genreId: 1,
        decade_created: '1990s',
        rating: 9.5,
        platforms: [20], // SNES
    },
    {
        name: 'Super Smash Bros. Melee',
        genreId: 3,
        decade_created: '2000s',
        rating: 9.6,
        platforms: [5], // GameCube
    },
    {
        name: 'Super Street Fighter II: The World Warrior',
        genreId: 3,
        decade_created: '1990s',
        rating: 7,
        platforms: [20], // SNES
    },
    {
        name: "Tony Hawk's Pro Skater",
        genreId: 14,
        decade_created: '1990s',
        rating: 9.8,
        platforms: [1, 4, 9, 13], // Dreamcast, Game Boy Color, N64, PS1
    },
    {
        name: "Tony Hawk's Pro Skater 2",
        genreId: 14,
        decade_created: '2000s',
        rating: 9.3,
        platforms: [1, 4, 5, 9, 12, 13], // Dreamcast, Game Boy Color, GameCube, N64, PC, PS1
    },
    {
        name: "Tony Hawk's Pro Skater 3",
        genreId: 14,
        decade_created: '2000s',
        rating: 9.5,
        platforms: [3, 4, 5, 9, 12, 13, 14, 23], // Game Boy Advance, Game Boy Color, GameCube, N64, PC, PS1, PS2, Xbox
    },
    {
        name: "Tony Hawk's Pro Skater 4",
        genreId: 14,
        decade_created: '2000s',
        rating: 9.3,
        platforms: [3, 5, 12, 13, 14, 23], // Game Boy Advance, GameCube, PC, PS1, PS2, Xbox
    },
    {
        name: 'Tekken 8',
        genreId: 3,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
    },
    {
        name: 'Tomb Raider',
        genreId: 1,
        decade_created: '1990s',
        rating: 9.3,
        platforms: [12, 13, 26], // PC, PS1, Sega Saturn
    },
    {
        name: 'Ultimate Marvel VS Capcom 3',
        genreId: 3,
        decade_created: '2010s',
        rating: 8,
        platforms: [12, 15, 16, 24, 25], // PC, PS3, PS4, Xbox 360, Xbox One
    },
    {
        name: 'Valheim',
        genreId: 12,
        decade_created: '2020s',
        rating: 9,
        platforms: [12, 25, 26], // PC, Xbox One, Xbox Series X/S
    },
    {
        name: 'The Witcher 3: Wild Hunt',
        genreId: 2,
        decade_created: '2010s',
        rating: 9.3,
        platforms: [11, 12, 16, 17, 25, 26], // Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series X/S
    },
    {
        name: 'Wizard101',
        genreId: 10,
        decade_created: '2000s',
        rating: 8.4,
        platforms: [12], // PC
    },
];

const seedTitles = () => Title.bulkCreate(titlesData);

module.exports = seedTitles;