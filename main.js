
// Action controller
const actionController = new ActionController();

//Input Controller
const inputController = new InputController();

// Player controller
const playerController = new PlayerController();

// Display Controller
const displayController = new DisplayController();

// Game object
const game = new GameController();
game.start();

const changeActionTo = (action) => actionController.update(action);