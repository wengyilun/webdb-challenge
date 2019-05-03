
exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', function (tbl){
		tbl.increments()
		tbl.string('name')
		.notNullable()
		.unique()
		
		tbl.string('description')
		
		tbl.boolean('completed')
		.defaultTo(false)
		
		tbl.timestamps(true, true)
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('projects')
};
