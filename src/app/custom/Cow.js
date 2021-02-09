import EventEmitter from 'eventemitter3';
import gsap from 'gsap/all';

const EVENTS = { 
    ABDUCT_COMPETED: 'abduct_completed'
};

export default class Cow extends EventEmitter{
    constructor(){
        super();

        this._cowElement = document.querySelector('.cow');
    }

    static get events(){
        return EVENTS;
    }

    moveTo(){
        gsap.timeline().to(this._cowElement, {opacity:1, y:-390, duration:1.5, delay:5, id:'cowAduction'})
                        .to(this._cowElement, {opacity:0, id:'cowHide'});

        this.emit(Cow.events.ABDUCT_COMPETED);
    }
}