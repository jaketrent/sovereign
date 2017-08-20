exports.up = knex =>
  knex.schema.createTable('games', t => {
    t.string('id').notNull().primary()
    t.jsonb('state')
    t.dateTime('createdAt').notNull().defaultTo(knex.fn.now())
    t.dateTime('updatedAt').notNull().defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('games')
