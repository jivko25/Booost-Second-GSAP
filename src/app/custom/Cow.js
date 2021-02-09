import EventEmitter from 'eventemitter3';
import gsap from 'gsap/all';

const EVENTS = { 
    ABDUCT_COMPLETED: 'abduct_completed'
};

export default class Cow extends EventEmitter{
    constructor(){
        super();

        this._cowElement = document.querySelector('.cow');
    }

    static get events(){
        return EVENTS;
    }

    async moveTo(){
        await gsap.to(this._cowElement, {opacity:1, y:-390, duration: 2, id:'cowAbduction'})

        this.emit(Cow.events.ABDUCT_COMPLETED);
    }

    async hide(){
        await gsap.to(this._cowElement, {opacity:0, duration: 0 ,id:'cowHide'});
    }
}