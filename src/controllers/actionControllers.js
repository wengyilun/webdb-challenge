import db from '../utils/db'
const tableName = 'actions'

export const getActions = async (req, res) => {
	try {
		const recipe = await db.getMany(tableName)
		res.status(200).json(recipe)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const postActions = async (req, res) => {
	try {
		if(!req.body.description){
			res.status(401).json({message:'description is a required field'})
		}
		const lastId = await db.createOne(tableName, req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateAction = async (req, res) => {
	try {
		if(!req.body.description || !req.params.id){
			res.status(401).json({message:'description and id is a required field'})
		}
		const count = await db.updateOne(tableName, req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const getOneAction = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const recipe = await db.getOne(tableName, id)
		res.status(200).json(recipe)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const deleteAction = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.removeOne(tableName, req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
