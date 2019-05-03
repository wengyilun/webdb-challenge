import db from '../utils/db'

export const getMany = (model)  => async (req, res) => {
	console.log('req',req)
	console.log('getMany', model)
	try {
		const results = await db.getMany(model)
		res.status(200).json(results)
	}
	catch(e){
		console.log('e',e)
		res.status(500).json(e);
	}
}

export const getOne = model  => async (req, res) => {
	console.log('getOne', model)
}

export const createOne = (model) => async (req, res) => {
	console.log('req',req)
	console.log('req',req.body)
	try {
	 	const lastIndex = await db.createOne(model, req.body)
		res.status(201).json(lastIndex)
	}
	catch(e){
		console.log('e',e)
		res.status(500).json(e);
	}
}

export const updateOne = (model)   => async (req, res) => {
}
export const removeOne = (model)   => async (req, res) => {
}


export const crudControllers = (model) => ({
	removeOne: removeOne(model),
	updateOne: updateOne(model),
	getMany: getMany(model),
	getOne: getOne(model),
	createOne: createOne(model)
})

