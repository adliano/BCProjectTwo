// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'pets_DB',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'pets_DB',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'pets_DB'
    }
  }
}
