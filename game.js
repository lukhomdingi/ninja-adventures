// Constant values
const FPS = 30;
class GameController {
    elapsed = 0;
    lastRender = 0;
    constructor() {
        this.hasStarted = false;
    }

    start = () => {
        this.hasStarted = true;
        window.requestAnimationFrame(this.loop);
    }

    loop = (timestamp) => {
        const elapsed = timestamp - this.lastRender;
        const fpsInterval = 1000 / FPS;
        if (elapsed > fpsInterval) {
            this.update();
        }

        this.lastRender = timestamp - (elapsed % fpsInterval);
        window.requestAnimationFrame(this.loop);
    }
    
    update = () => {
        if (!this.hasStarted)
            throw 'The game has not been started.'
        displayController.render();

    }
}