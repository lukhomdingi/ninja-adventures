// Actions
const ACTION = Object.freeze({
    ATTACK: 'Attack',
    CLIMB: 'Climb',
    DEAD: 'Dead',
    GLIDE: 'Glide',
    IDLE: 'Idle',
    JUMP: 'Jump',
    JUMP_ATTACK: 'Jump Attack',
    JUMP_THROW: 'Jump Throw',
    RUN: 'Run',
    SLIDE: 'Slide',
    THROW: 'Throw',
});

// Constant values
const DEFAULT_ACTION = ACTION.IDLE;
const NUMBER_OF_FRAMES = 10;
const IMAGE_DIR = './assets/sprites';
const FILE_EXTENSION = 'png';
const x = 100;
const y = 10

class Display {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.currentIndex = 0;
        this.currentAction = DEFAULT_ACTION;

        this.ninja = new Image();
        this.resize();
    }

    set playerAction(action) {
        switch (action.toLowerCase()) {
            case 'attack': this.currentAction = ACTION.ATTACK; break;
            case 'climb': this.currentAction = ACTION.CLIMB; break;
            case 'dead': this.currentAction = ACTION.DEAD; break;
            case 'glide': this.currentAction = ACTION.GLIDE; break;
            case 'jump': this.currentAction = ACTION.JUMP; break;
            case 'jump attack': this.currentAction = ACTION.JUMP_ATTACK; break;
            case 'jump throw': this.currentAction = ACTION.JUMP_THROW; break;
            case 'run': this.currentAction = ACTION.RUN; break;
            case 'slide': this.currentAction = ACTION.SLIDE; break;
            case 'throw': this.currentAction = ACTION.THROW; break;
            default: this.currentAction = ACTION.IDLE;
        }
    }

    render() {
        this.currentIndex = ++this.currentIndex % NUMBER_OF_FRAMES;
        this.context.clearRect(x, y, canvas.width, canvas.height);
        this.ninja.src = `${IMAGE_DIR}/${this.currentAction}/${this.currentIndex}.${FILE_EXTENSION}`;
        this.context.drawImage(this.ninja, x, y);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}