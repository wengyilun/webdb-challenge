import knex from 'knex'
import knexConfig from '../../knexfile.js'
const db = knex(knexConfig.development)

const dao = {
	getMany,
	createOne,
	removeOne,
	getOne,
	updateOne,
	getOneProject,
	getProjectDetails,
	getActionsByProject
}

async function getMany(tbl){
	return db(tbl)
}

async function getOne(tbl){
	return db(tbl)
}

async function createOne(tbl, item){
	return db.insert(item)
	.into(tbl)
}

async function updateOne(tbl, id, item){
	return db.where({id:id})
	.update(item)
	.into(tbl)
}

async function removeOne(tbl, id){
	return db(tbl)
	.where({id:id})
	.del()
}

async function getOneProject(tbl, id){
	return db('projects')
		.where({'projects.id':id})
		.first()
}

async function getProjectDetails(tbl, id){
	return db('projects')
		.where({'projects.id':id})
		// .select(knex.raw(`recipes.name as 'RECIPE',dishes.name as 'DISH'`))
		.join('actions', 'actions.project_id', 'projects.id')
		.distinct()
}

async function getActionsByProject(tbl, id){
	return db('actions')
		.where({'project_id':id})
}

export default dao
