const { Genre } = require('../models');

const genresData = [
    { name: 'Action-Adventure' },
    { name: 'Action Role-Playing' },
    { name: 'Fighting' },
    { name: 'First-Person Shooter' },
    { name: 'Party' },
    { name: 'Platform' },
    { name: 'Puzzle' },
    { name: 'Racing' },
    { name: 'Rail Shooter' },
    { name: 'Role-Playing' },
    { name: 'Run and Gun' },
    { name: 'Sandbox' },
    { name: 'Simulation' },
    { name: 'Sports' },
];

const seedGenres = () => Genre.bulkCreate(genresData);

module.exports = seedGenres;