import { Project } from '../utils/utils';
import thePsychicGamePic from '../static/the_psychic_game.png';
import crystalCollectorPic from '../static/crystal_collector.png';
import triviaGamePic from '../static/trivia_game.png';
import giphyPic from '../static/giphy.png';
import trainTablePic from '../static/train_table.png';
import friendsFinderPic from '../static/friends_finder.png';
import burgerPic from '../static/burger.png';
import officeBrunchPic from '../static/office_brunch.png';
import bringPic from '../static/bring.png';
export default [
  new Project(
    'The Psychic Game',
    thePsychicGamePic,
    'HTML + JS. Direct DOM manipulation. Deployment with GitPages.',
    'https://mike-4040.github.io/Word-Guess-Game/',
    'https://github.com/mike-4040/Word-Guess-Game'
  ),
  new Project(
    'Crystal Collector',
    crystalCollectorPic,
    'HTML + JS. jQuery. Deployment with GitPages.',
    'https://mike-4040.github.io/unit-4-game/',
    'https://github.com/mike-4040/unit-4-game'
  ),
  new Project(
    'Trivia Game',
    triviaGamePic,
    'HTML + JS, Bootsrap, jQuery. Deployed with GitPages.',
    'https://mike-4040.github.io/trivia-game/',
    'https://github.com/mike-4040/trivia-game'
  ),
  new Project(
    'GIPHY API',
    giphyPic,
    'HTML, Bootsrap, jQuery, API. Deployed with GitPages.',
    'https://mike-4040.github.io/giphy/',
    'https://github.com/mike-4040/giphy'
  ),
  new Project(
    'Train Table',
    trainTablePic,
    'Bootsrap, jQuery, Moment.js, Firebase Realtime Database.',
    'https://mike-4040.github.io/train-table/',
    'https://github.com/mike-4040/train-table'
  ),
  new Project(
    'Friends Finder',
    friendsFinderPic,
    'Bootsrap, jQuery, node, express. Deployment: Heroku.',
    'https://whispering-inlet-78054.herokuapp.com',
    'https://github.com/mike-4040/friendsfinder'
  ),
  new Project(
    'Burger',
    burgerPic,
    'Bootstrap, jQuery, node, express, MySQL. Deployment: Heroku, JawsDB.',
    'https://mike4040-burger.herokuapp.com/',
    'https://github.com/mike-4040/burger'
  ),
  new Project(
    'Office Brunch',
    officeBrunchPic,
    'WordPress, WooCommerce, SUMO Rewards, Stripe Payments. Deployment: KINSTA.',
    'https://officebrunch.com/how-it-works/',
    ''
  ),
  new Project(
    'Bring',
    bringPic,
    'React, React-bootstrap, Axios, node, express, mongoDB, mongoose, SendGrid, Heroku Scheduler.',
    'http://bring-ucsd.herokuapp.com/',
    'https://github.com/mike-4040/ucsd-final-project'
  )
];
