import Saucer from './Saucer';
import Cow from './Cow';

export default class Animation{
    constructor(){
        this.saucer = new Saucer();
        this.cow = new Cow();
    }
    async start(){
        await this.saucer.moveTo();
        await this.saucer.BeamShow();
        await this.cow.moveTo();
        await this.cow.hide();
        await this.saucer.BeamHide();
        await this.saucer.moveAway();
    }
}