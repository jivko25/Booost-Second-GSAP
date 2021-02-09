import EventEmitter from 'eventemitter3';
import gsap from 'gsap/all';

const EVENTS = {
    FLY_IN: 'fly_in', 
    FLY_AWAY:'fly_away', 
    BEAM_SHOW: 'beam_showed', 
    BEAM_HIDE: 'beam_hide',};

export default class Saucer extends EventEmitter{

    constructor(){
        super();

        this._saucerElement = document.querySelector('.ufo');
        this._beamTopElement = document.querySelector('#beam-top');
        this._beamBottomElement = document.querySelector('#beam-bottom');
    }

    static get events(){
        return EVENTS;
    }

    moveTo(){
        gsap.timeline().to(this._saucerElement, {x:-835, duration:5})
                        .to(this._saucerElement,{x: -1800, duration:5});
        this.emit(Saucer.events.FLY_IN);
    }


}