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
const SPEED = 100;
const IMAGE_DIR = './assets/sprites';
const FILE_EXTENSION = 'png';
const x = 100;
const y = 0

// Get canvas and context
const canvas = document.getElementById('ninja-canvas');
const context = canvas.getContext('2d');

// Resizing canvas
canvas.width = window.innerHeight;
canvas.height = window.innerHeight;

// Create image
const ninja = new Image();

// Current frame
var currentIndex = 0;
var currentAction = DEFAULT_ACTION;

// Update frame
function update() {
    currentIndex = ++currentIndex % NUMBER_OF_FRAMES;
    context.clearRect(x, y, canvas.width, canvas.height);
}

// Draw Image
function draw() {
    update();
    ninja.src = `${IMAGE_DIR}/${currentAction}/${currentIndex}.${FILE_EXTENSION}`;
    context.drawImage(ninja, x, y);
}

const timer = setInterval(() => {
    draw();
}, SPEED);

function changeActionTo(action) {
    currentIndex = 0;
    switch (action.toLowerCase()) {
        case 'attack': currentAction = ACTION.ATTACK; break;
        case 'climb': currentAction = ACTION.CLIMB; break;
        case 'dead': currentAction = ACTION.DEAD; break;
        case 'glide': currentAction = ACTION.GLIDE; break;
        case 'jump': currentAction = ACTION.JUMP; break;
        case 'jump attack': currentAction = ACTION.JUMP_ATTACK; break;
        case 'jump throw': currentAction = ACTION.JUMP_THROW; break;
        case 'run': currentAction = ACTION.RUN; break;
        case 'slide': currentAction = ACTION.SLIDE; break;
        case 'throw': currentAction = ACTION.THROW; break;
        default: currentAction = ACTION.IDLE;
    }
}