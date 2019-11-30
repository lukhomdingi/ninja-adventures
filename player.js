// Constant values
const playerX = 0;
const playerY = 350;
const playerWidth = 58;
const playerHeight = 110;

class PlayerController {
    constructor() {
        this._position = new Points(playerX, playerY);
        this._size = new Size(playerWidth, playerHeight);
        this._direction = DIRECTION.LEFT;
        
        this._canvas = document.querySelector('canvas#player-canvas');
        this._context = this._canvas.getContext('2d');

        this._canvas.width = GAME_WIDTH;
        this._canvas.height = GAME_HEIGHT;
        

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

    get canvas() {
        return this._canvas;
    }

    get context() {
        return this._context;
    }
}