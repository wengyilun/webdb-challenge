import * as controllers  from '../controllers/projectControllers'

function setupProjectRoutes(router){
	router.get('/', controllers.getProjects)
	router.post('/', controllers.postProjects)
	router.get('/:id', controllers.getProject)
	router.put('/:id', controllers.updateProject)
	router.delete('/:id', controllers.deleteProject)
	router.get('/:id/details', controllers.getProjectDetails)
	router.get('/:id/actions', controllers.getActionsByProject)
}
export default setupProjectRoutes
