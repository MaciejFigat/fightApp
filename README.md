


<div align="center">
 
  <h3 align="center">FightBet - Smile. Cry. Bet again!</h3>

  <p align="center">
    (please don't it's just proof of concept)
    <br />
    <br />
    <a href="https://fightbet.netlify.app/">Live version</a> 
    &#9898;
    <a href="https://github.com/MaciejFigat/fightAppBE">BE repository</a>
    &#9898;
    <a href="https://scribehow.com/page/Fight_Bet__d-qZ4wCnQEqq2Z0j9HF4xA">Scribe documentation</a>
    &#9898;
    <a href="https://646b92a74814fa6f70ee5192-wuuofkjlmv.chromatic.com">Storybook</a>
   </p>
</div>

## About the Project

This is a proof of concept of a betting application, made for educational purposes during my time at the [Evolution Typescript Bootcamp](https://typescript-bootcamp.evolution.com/).

### Features

- [x] User can register and login
- [x] User can see upcoming fights
- [x] User can bet on a fight [simple flow](https://scribehow.com/shared/FightBet_simple_flow__w0kHTws2SieivUZrN84REw)
- [x] User can see his [bets](https://scribehow.com/shared/Settled_and_expired_bets__RV-EHJUJRcKoJLctzg88Jw)
- [x] User can see his balance



### Built With

### `framer-motion`

Framer Motion is a popular animation library for React. It provides an easy-to-use API for creating complex animations with minimal code. In this project, [Framer Motion](https://www.framer.com/motion/) is used to create animations for various UI components. 

### `@reduxjs/toolkit`

[Redux Toolkit](https://redux-toolkit.js.org/) is a set of utilities and tools that make it easier to use Redux in your applications. In this project, Redux Toolkit is used to manage application state.

### `@hello-pangea/dnd`
Successor of react-beautiful-dnd. Provides complete typing and is maintained by dependable people. In this project, is used to create drag and drop functionality for the application.
[Link to docs](https://github.com/hello-pangea/dnd)

## Usage
From the frontend side You would need to create a .env file with the following variables: 

REACT_APP_MMA_API_KEY = [your free trail key](https://sportsdata.io/cart/free-trial) 

### Important
 In order to set up live version with Render.com server and Netlify client, 
 You will need _redirects file in public folder with the following content:
 
``` 
    /api/*  https://yourcoolapp.onrender.com/api/:splat  200
    /*    /index.html    200
```
 


## Installation `npm install`

You will need to have Node.js installed on your machine. Once you have Node.js installed, run the following command to install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.


## Contact me 

If you have any questions or suggestions, feel free to contact me at:
[LinkedIn](https://www.linkedin.com/in/maciej-figat/)
