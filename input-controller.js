class InputController {
    constructor() {
        window.addEventListener('keydown', this.keydown, false);
        window.addEventListener('keyup', this.keyup, false);
    }

    keydown = (event) => {
        event.preventDefault();

        switch(event.key.toLowerCase()) {
            case 'k': actionController.attack(); break;
            case 'c': actionController.climb(); break;
            case 'g': actionController.glide(); break;
            case 'w':
            case 'arrowup': actionController.jump(); break;
            case 'a':
            case 'arrowleft': actionController.run(DIRECTION.LEFT); break;
            case 'd':
            case 'arrowright': actionController.run(DIRECTION.RIGHT); break;
            case 's': actionController.slide(); break;
            case 'l': actionController.throw(); break;
        }
    }

    keyup = (event) => {
        event.preventDefault();
        actionController.idle();
    }
}