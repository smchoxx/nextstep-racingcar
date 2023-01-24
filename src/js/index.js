// import playRacing from '../js_v2/presentation/playRacing.js';
import addEvent from './addEvent.js';
import init from './ui/init.js';

function startCarRacingGame() {
  init();
  addEvent();
  // playRacing()
}

window.addEventListener('load', startCarRacingGame);
