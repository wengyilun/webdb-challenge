import express from 'express'
import setupProjectRoutes from './projectRoutes'
import setupActionRoutes from './actionRoutes'

function setupRoutes(app){
	const projectRouter = express.Router()
	setupProjectRoutes(projectRouter)
	app.use('/api/projects', projectRouter)
	
	const actionRouter = express.Router()
	setupActionRoutes(actionRouter)
	app.use('/api/actions', actionRouter)
}

export default setupRoutes
