//  Constant values
const GAME_WIDTH = 816;
const GAME_HEIGHT = 480;
class DisplayController {
    constructor() {
        this.canvas = document.querySelector('canvas#background-canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;

        this.currentIndex = 0;
        this.currentAction = DEFAULT_ACTION;

        this.background = new Image(this.canvas);
        this.background.src = './assets/parallax-forest.png'
        this.background.addEventListener('load', this.drawBackground, false);
    }

    render() {
        const {width, height} = this.canvas;
        this.context.clearRect(0, 0, width, height);
        this.drawBackground();
        this.drawPlayer();
        
    }

    drawBackground = () => {
        const {width, height} = this.canvas;
        const srcX = 0;
        const srcY = 0;
        this.context.drawImage(this.background, srcX, srcY, width, height);
    }

    drawPlayer() {
        
        this.currentIndex = ++this.currentIndex % NUMBER_OF_FRAMES;
        const {canvas, context, position, size} = playerController;
        const action = actionController.getAction(this.currentIndex);

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(action, position.x, position.y, size.width, size.height);
    }
}