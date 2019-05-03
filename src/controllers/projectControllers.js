import db from '../utils/db'
const tableName = 'projects'

export const getProjects = async (req, res) => {
	try {
		const projects = await db.getMany(tableName)
		res.status(200).json(projects)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const postProjects = async (req, res) => {
	console.log('req',req.body)
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.createOne(tableName, req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateProject = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateOne(tableName, req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this project does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const getOneProject = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const project = await db.getOne(tableName, id)
		res.status(200).json(project)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const deleteProject = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.removeOne(tableName, req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this project does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const getProject = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const project = await db.getOneProject(tableName, req.params.id)
		const actions = await db.getActionsByProject(tableName, req.params.id)
		
		const result = {
			...project,
			actions: actions
		}
		res.status(200).json(result)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const getProjectDetails = async (req, res) => {
	try {
		console.log('req',req)
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const project = await db.getProjectDetails(tableName, req.params.id)
		res.status(200).json(project)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}


export const getActionsByProject = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const actions = await db.getActionsByProject(tableName, req.params.id)
		res.status(200).json(actions)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}
