
// Action controller
const actionController = new ActionController();

// Display Controller
const displayController = new DisplayController();

// Game object
const game = new GameController();
game.start();

const changeActionTo = (action) => actionController.update(action);