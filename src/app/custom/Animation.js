import Saucer from './Saucer';
import Cow from './Cow';

export default class Animation{
    start(){
        const saucer = new Saucer();
        const cow = new Cow();
        saucer.moveTo();
        saucer.moveAway();
        saucer.toggleBeam();
        cow.moveTo();
    }
}