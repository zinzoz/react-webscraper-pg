export function up(knex, Promise) {

	return Promise.all([

				knex.schema.createTable('nasdaq', function(table) {
						table.increments('id').primary();
						table.string('index');
						table.float('value');
						table.float('net');
						table.datetime('date');
						//table.timestamps();
				})




		])

	 }


export function down(knex, Promise) {

	return Promise.all([
        knex.schema.dropTable('nasdaq')

    ])

	 }
