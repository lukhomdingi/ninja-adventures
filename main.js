// Constant values
const SPEED = 100;

// Get canvas
const canvas = document.getElementById('ninja-canvas');

// Instantiate display object
const display = new Display(canvas);

// Instantiate game object
const game = new Game(display);

// Timer
const timer = setInterval(() => {
    game.update();
}, SPEED);

const changeActionTo = (action) => game.updateAction(action);