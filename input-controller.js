class InputController {
    constructor() {
        window.addEventListener('keydown', this.keydown, false);
        window.addEventListener('keyup', this.keyup, false);
    }

    keydown = (event) => {
        event.preventDefault();
        console.log('keydown', event.key);

        switch(event.key.toLowerCase()) {
            case ' ': actionController.attack(); break;
            case 'c': actionController.climb(); break;
            case 'g': actionController.glide(); break;
            case 'w':
            case 'arrowup': actionController.jump(); break;
            case 'a':
            case 'arrowleft': actionController.run('Left'); break; //use Direction.Left
            case 'd':
            case 'arrowright': actionController.run('Right'); break; //use Direction.Right
            case 'l': actionController.slide(); break;
            case 'k': actionController.throw(); break;
        }
    }

    keyup = (event) => {
        event.preventDefault();
        let key = event.key.toLowerCase();
        if (key) {

        } else {
            actionController.idle();
        }
    }
}