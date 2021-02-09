import Saucer from './Saucer';
import Cow from './Cow';

export default class Animation{
    constructor(){
        this.saucer = new Saucer();
        this.cow = new Cow();
    }
    start(){
        this.saucer.moveTo();
        this.saucer.BeamShow();
        this.cow.moveTo();
        this.cow.hide();
        this.saucer.BeamHide();
        this.saucer.moveAway();
    }
}