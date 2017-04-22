
import { forEach } from 'lodash'
import createController from '_controllers/create'

function createControllers(db, controllers) {

  forEach(controllers, (controller, name) => {
    createController(db, controller, name)
  })

  return controllers
}

module.exports = createControllers