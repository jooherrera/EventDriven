import EventBus from '../components/EventBus.js'
import BusTool from '../components/EventBusTool.js'
import { Service1 } from '../components/Service1.js'
import { Service2 } from '../components/Service2.js'
import { Service3 } from '../components/Service3.js'
const bus = new EventBus()
const eventBus = BusTool.getEventBus(bus)

export const service1 = new Service1()
export const service2 = new Service2()
export const service3 = new Service3()

global.eventBus = eventBus
