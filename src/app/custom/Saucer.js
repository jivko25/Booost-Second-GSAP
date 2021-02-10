import EventEmitter from 'eventemitter3';
import gsap from 'gsap/all';

const EVENTS = {
    FLY_IN: 'fly_in', 
    FLY_AWAY:'fly_away', 
    BEAM_SHOW: 'beam_showed', 
    BEAM_HIDE: 'beam_hide',
};

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

    // moveTo(){
    //     gsap.timeline().to(this._saucerElement, {x:-835, duration:5})
    //                     .to(this._saucerElement,{x: -1800, duration:5, delay:2});
    //     this.emit(Saucer.events.FLY_IN);
    // }

    async moveTo(){
        await gsap.to(this._saucerElement, {x: '-835px', duration:2, id:'flyIn', ease:'power1.out'});

        this.emit(Saucer.events.FLY_IN);
    }

    async moveAway(){
        await gsap.to(this._saucerElement,{x: '-1800px', duration:2, id:'flyOut', ease:'power1.in'});

        this.emit(Saucer.events.FLY_AWAY);
    }

    // toggleBeam(){
    //     this.BeamShow();
    //     this.BeamHide();
    // }

    async BeamShow(){
        // await gsap.to(this._beamTopElement, {opacity:0.6, duration: 1, id:'showTopBeam'});
        // await gsap.to(this._beamBottomElement, {opacity:0.6, duration: 1, id:'showBottomBeam'});

        await gsap.timeline().to(this._beamTopElement, {opacity:0.6, duration: 1, id:'showTopBeam'})
                    .to(this._beamBottomElement, {opacity:0.6, duration: 1, id:'showBottomBeam'});

        this.emit(Saucer.events.BEAM_SHOW);
    }

    async BeamHide(){
        await gsap.timeline().to(this._beamTopElement, {opacity:0, duration: 0.5, id:'hideTopBeam'})
                    .to(this._beamBottomElement, {opacity:0, duration: 0.5, id:'hideBottomBeam'});

        this.emit(Saucer.events.BEAM_HIDE)
    }


}