// Constant values
const x = 100;
const y = 10

class DisplayController {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.currentIndex = 0;
        this.currentAction = DEFAULT_ACTION;
        this.resize();
    }

    render() {
        this.currentIndex = ++this.currentIndex % NUMBER_OF_FRAMES;
        this.context.clearRect(x, y, this.canvas.width, this.canvas.height);
        const action = actionController.getAction(this.currentIndex);
        this.context.drawImage(action, x, y);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}