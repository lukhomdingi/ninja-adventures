// Constant values
const x = 100;
const y = 10
const playerWidth = 116;
const playerHeight = 220;

class PlayerController {
    constructor() {
        this._position = new Points(x, y);
        this._size = new Size(playerWidth, playerHeight);
        this._direction = DIRECTION.LEFT;

    }

    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }

    get position() {
        return this._position;
    }

    get size() {
        return this._size;
    }
}