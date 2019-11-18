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

    update(value) {
        let action = null;
        switch (value.toLowerCase()) {
            case 'attack': action = ACTION.ATTACK; break;
            case 'climb': action = ACTION.CLIMB; break;
            case 'dead': action = ACTION.DEAD; break;
            case 'glide': action = ACTION.GLIDE; break;
            case 'jump': action = ACTION.JUMP; break;
            case 'jump attack': action = ACTION.JUMP_ATTACK; break;
            case 'jump throw': action = ACTION.JUMP_THROW; break;
            case 'run': action = ACTION.RUN; break;
            case 'slide': action = ACTION.SLIDE; break;
            case 'throw': action = ACTION.THROW; break;
            default: action = ACTION.IDLE;
        }
        this.currentAction = this.actions.find((a) => a.name == action);
    }
}