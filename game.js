
class Game {
    constructor(display) {
        this.display = display;
    }

    updateAction(action) {
        this.display.playerAction = action;
    }

    update() {        
        this.display.render();
    }
}