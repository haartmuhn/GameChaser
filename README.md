<div align="center">

# Game Chaser

[![License: MIT](https://img.shields.io/badge/License-MIT-darkgreen.svg)](https://opensource.org/licenses/MIT)
![CSS3 Badge](https://img.shields.io/badge/css-1572B6?logo=css3&logoColor=fff&style=flat)
![JavaScript Badge](https://img.shields.io/badge/js-F7DF1E?logo=javascript&logoColor=000&style=flat)
![JSON Badge](https://img.shields.io/badge/json-FF0000?logo=json&logoColor=fff&style=flat)
![npm Badge](https://img.shields.io/badge/npm-A020F0?logo=npm&logoColor=fff&style=flat)
![Node.JS Badge](https://img.shields.io/badge/node-orange?logo=node.js&logoColor=fff&style=flat)

</div>

## Description

Game Chaser is a web application designed to help gamers discover and explore new games based on their personal preferences. Users can search for games by various criteria, receive personalized recommendations, and manage their own list of favorite games. The platform features a clean and intuitive interface built with Tailwind CSS and offers both current and retro game titles.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Technologies

-   **Backend:** Node.js, Express.js
-   **Database:** PostgreSQL, Sequelize ORM
-   **Frontend:** Handlebars.js, Tailwind CSS
-   **Authentication:** Express-session, Bcrypt
-   **Utilities:** PostCSS, Autoprefixer, Nodemon
-   **Version Control:** Git

## Installation

### Prerequisites

-   Node.js (v14.x or later)
-   PostgreSQL (v12.x or later)

### Steps

1.  Clone the repository

```bash
git clone https://github.com/haartmuhn/GameChaser.git
```

2.  Navigate to the project directory

```bash
cd GameChaser
```

3.  Install dependencies

```bash
npm install
```

4.  Rename `.env.EXAMPLE` to `.env` and fill in your PostgreSQL credentials.

```env
DB_NAME=''
DB_USER=''
DB_PASSWORD=''
DB_HOST=''
SECRET=''
```

5.  Build the CSS

```bash
npm run build:css
```

6.  Start the server

```bash
npm start
```

7.  Open your browser and navigate to

```bash
http://localhost:3001
```

The application will be running at `http://localhost:3001`.

## Usage

-   **Homepage:** View featured games and browse the latest additions.
-   **Search:** Use the search form to find games based on genre, platform, decade created, or rating.
-   **About:** Learn about the mission, vision, and future development plans for Game Chaser.
-   **Login/Signup:** Register or log in to manage your game preferences and favorite list.

## Features

-   **Game Search:** Search for games by various criteria.
-   **User Authentication:** Secure login and registration.
-   **Responsive Design:** Mobile-friendly layout using Tailwind CSS.
-   **Dynamic Content:** Server-side rendering of game data and user-specific content.
-   **Future Enhancements:** Plans to include personalized game suggestions, features like friends list, messaging, achievements, and leaderboards.

## Contributing

Contributions to Game Chaser are welcome! Here’s how you can contribute:

1. **Fork the repository** on GitHub.
2. **Create a branch** for your feature `git checkout -b new-feature`.
3. **Make changes** and commit them `git commit -m "Add some feature"`.
4. **Push to the branch** `git push origin new-feature`.
5. **Create a new Pull Request** against the main.

Please ensure your code adheres to the existing style of the project to make your changes easy to understand and integrate!

## Tests

To run tests, execute the following command:

```
npm test
```

(Note: You will need to write the tests based on the endpoints and operations your application performs, as this is not set up by default.)

## Credits

**Frontend:** [Justin Herrera](https://github.com/Justino11247) and [Heather Weltzien](https://github.com/hweltzien)

**Backend:** [Andrew Hartmann](https://github.com/haartmuh), [Ted Perez](https://github.com/taperez1989) and [Adam Rosenberg](https://github.com/AcoderRose)

Special thanks to Anthony Barragan, Erik Hirsch, Philip Loy, John Titus, Siddharth Shekhar, and Katie Redford.

## License

Game Chaser is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this application according to the terms of the license.