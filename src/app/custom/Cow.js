import EventEmitter from 'eventemitter3';
import gsap from 'gsap/all';

const EVENTS = { 
    ABDUCT_COMPETED: 'abduct_completed',
    COW_ABDUCTED: 'cow_abducted'
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
        gsap.to(this._cowElement, {opacity:1, y:-390, duration:1.5, delay:5, id:'cowAduction'})

        this.emit(Cow.events.ABDUCT_COMPETED);
    }

    hide(){
        gsap.to(this._cowElement, {opacity:0, duration: 1.5, delay:6.5 ,id:'cowHide'});

        this.emit(Cow.events.COW_ABDUCTED);
    }
}