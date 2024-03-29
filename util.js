class Points {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    set x(value) {this._x = value;}
    get x() {return this._x;}

    set y(value) {this._y = value;}
    get y() {return this._y;}
}

class Size {
    constructor(width = 0, height = 0) {
        this._width = width;
        this._height = height;
    }

    set width(value) {this._width = value;}
    get width() {return this._width;}

    set height(value) {this._height = value;}
    get height() {return this._height;}
}

const DIRECTION = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
})