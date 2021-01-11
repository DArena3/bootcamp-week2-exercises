exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
        .uuid('sender_id')
        .notNullable()
        .references('users.id')

    table
        .uuid('recipient_id')
        .notNullable()
        .references('users.id')

    table
        .string('status')
        .notNullable()

    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')