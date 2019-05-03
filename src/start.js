
import express from 'express'
import helmet from 'helmet'
import setupRoutes from './routes'


function startServer(port){
	const app = express()
	
	app.use(express.json())
	
	setupRoutes(app)
	
	app.listen(port, function (){
	   console.log(`Server runing on port ${port}`)
	})
}

export default startServer
