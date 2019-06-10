// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      // change user depending on USER.
      user: 'nodeUser',
      password: '',
      database: 'pets_DB',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  }
}
