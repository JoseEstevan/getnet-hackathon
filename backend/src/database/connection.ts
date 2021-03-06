import Knex from 'Knex';
import knexPostgis from 'knex-postgis';
import path from 'path';

const db = Knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db;