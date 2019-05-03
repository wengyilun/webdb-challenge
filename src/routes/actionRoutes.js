import * as controllers  from '../controllers/actionControllers'

function setupProjectRoutes(router){
	router.get('/', controllers.getActions)
	router.post('/', controllers.postActions)
	router.get('/:id', controllers.getOneAction)
	router.put('/:id', controllers.updateAction)
	router.delete('/:id', controllers.deleteAction)
}
export default setupProjectRoutes
