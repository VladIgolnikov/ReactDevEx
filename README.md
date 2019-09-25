# ReactDevEx

Build Technologies React Dev Exercise - Vlad Igolnikov -

[bit.ly/BuildTech-ReactDevEx](http://bit.ly/BuildTech-ReactDevEx)

## Table of Contents

1. [Functionality](#Functionality)
2. [Notes](#Notes)
3. [Requirements](#Requirements)
4. [Development](#Development)

## Functionality:

On page load, the application sends an API request to fetch Assets and their corresponding Versions from a remote database.  Version counts are displayed on each Asset card, which are rendered in responsive grid.

## Notes

This application uses React and JavaScript on the front end, bundled via webpack. The back end uses Node.js and Express, as well as a SQLite database, seeded from a provided JSON file.

## Requirements

- Node v10.15.3

## Development

### Install Dependencies

From within the project directory root:

```sh
npm install
```

### Populate the Database

From within the project directory root:

```sh
npm run seed
```

### Build the webpack bundle

From within the root directory root:
To build in production mode:

```sh
npm run build
```

To build in development mode:

```sh
npm run dev
```

### Start the server

From within the project directory root:

```sh
npm start
```

(The server port is set to 3000)

### Run Tests

From within the project directory root:

```sh
npm test
```

(Tests are written in Jest)
