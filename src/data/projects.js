import { Project } from '../utils/utils';
import thePsychicGamePic from '../static/the_psychic_game.png';
import crystalCollectorPic from '../static/crystal_collector.png';
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
  )
];
