
// Action controller
const actionController = new ActionController();

const inputController = new InputController();

// Display Controller
const displayController = new DisplayController();

// Game object
const game = new GameController();
game.start();

const changeActionTo = (action) => actionController.update(action);