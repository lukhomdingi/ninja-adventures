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
const DEFAULT_ACTION = ACTION.IDLE;
const IMAGE_DIR = './assets/sprites';
const NUMBER_OF_FRAMES = 10;
const FILE_EXTENSION = 'png';
const RUNNING_SPEED = 10;
const JUMPING_LEVEL = 5;

class Action {
    constructor(name, numberOfFrames) {
        this._name = name;
        this.frames = new Array(numberOfFrames);
        for (let index = 0; index < numberOfFrames; index++) {
            const frame = new Image();
            frame.src = `${IMAGE_DIR}/${name}/${index}.${FILE_EXTENSION}`;
            this.frames[index] = frame;
        }
    }

    get name() {
        return this._name;
    }

    getFrame(index) {
        if (index < 0 || index >= this.frames.length)
            throw 'Index out of bound';
        return this.frames[index];
    }
}



class ActionController {

    currentAction = null;
    constructor() {
        this.actions = new Array()
        for (const key in ACTION) {
            if (ACTION.hasOwnProperty(key)) {
                const item = ACTION[key];
                const action = new Action(item, NUMBER_OF_FRAMES);
                this.actions.push(action);
                
            }
        }

        this.currentAction = this.actions.find((a) => a.name == DEFAULT_ACTION);
    }

    getAction(frame) {
        return this.currentAction.getFrame(frame);
    }

    attack = () => this.currentAction = this.actions.find((a) => a.name == ACTION.ATTACK);
    climb = () => this.currentAction = this.actions.find((a) => a.name == ACTION.CLIMB);
    dead = () => this.currentAction = this.actions.find((a) => a.name == ACTION.DEAD);
    glide = () => this.currentAction = this.actions.find((a) => a.name == ACTION.GLIDE);
    idle = () => this.currentAction = this.actions.find((a) => a.name == ACTION.IDLE);
    jump = () => this.currentAction = this.actions.find((a) => a.name == ACTION.JUMP);
    jumpAttack = () => this.currentAction = this.actions.find((a) => a.name == ACTION.JUMP_ATTACK);
    jumpThrow = () => this.currentAction = this.actions.find((a) => a.name == ACTION.JUMP_THROW);
    run = (direction) => {
        const {position} = playerController;
        this.currentAction = this.actions.find((a) => a.name == ACTION.RUN);
        if (direction == DIRECTION.LEFT) {
            playerController.position.x -= position.x > 0 ? RUNNING_SPEED : 0;
        }
        else {            
            playerController.position.x += RUNNING_SPEED;
        }
    }
    slide = () => this.currentAction = this.actions.find((a) => a.name == ACTION.SLIDE);
    throw = () => this.currentAction = this.actions.find((a) => a.name == ACTION.THROW);
}