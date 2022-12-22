import { service1, service2, service3 } from './config/config.js'

eventBus.subscribe('newQuestion', service2.create)
eventBus.subscribe('new', service2.create)

eventBus.subscribe('newQuestion', service3.notification)
eventBus.subscribe('new', service3.notificationNew)

const data = service1.create()
eventBus.publish('newQuestion', data)
eventBus.publish('new', data)
