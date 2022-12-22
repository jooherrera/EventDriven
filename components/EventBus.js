class EventBus{
    constructor(){
    this.eventObject = {}
    this.callbackId = 0
    }

    publish(eventName, ...args){
        const callbackObject = this.eventObject[eventName]

        if(!callbackObject) return console.warn(eventName + "not found!")

        for(let id in callbackObject){
            callbackObject[id](...args)

            if(id[0] === "d"){
                delete callbackObject(id)
            }

        }
    }

    subscribe(eventName, callback){

        if(!this.eventObject[eventName]){
            this.eventObject[eventName] = {}
        }

        const id = this.callbackId++

        this.eventObject[eventName][id] = callback

        const unSubscribe = () => {
            delete this.eventObject[eventName][id]

            if(Object.keys(this.eventObject[eventName]).length === 0 ){
                delete this.eventObject[eventName]
            }
        }


        return {unSubscribe}
    }

    clear(eventName){
        if(!eventName){
            this.eventObject = {}
            return
        }
        delete this.eventObject[eventName]
    }
}




export default EventBus