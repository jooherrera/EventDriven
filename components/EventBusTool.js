class EventBusTool {
    static _eventBus

    constructor(){}

    static getEventBus(EventBus) {
        if(this._eventBus == undefined){
            this._eventBus = EventBus
        }
        return this._eventBus
    }
}

export default EventBusTool