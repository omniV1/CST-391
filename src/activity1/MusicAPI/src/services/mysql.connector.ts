import { createPool, Pool } from 'mysql'; 
let pool: Pool | null = null; 

const initializeMySqlConnector = () => {
    try {
        pool = createPool({
            connectionLimit: parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT || '10'),
            port: parseInt(process.env.MY_SQL_DB_PORT || '3306'),
            host: process.env.MY_SQL_DB_HOST || '127.0.0.1',
            user: process.env.MY_SQL_DB_USER || 'root',
            password: process.env.MY_SQL_DB_PASSWORD || 'root',
            database: process.env.MY_SQL_DB_DATABASE || 'music',
            
        });
    
        console.debug('Mysql Adapter pool generated successfully');
        console.log('process.env.DB_DATABASE', process.env.MY_SQL_DB_DATABASE);

        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Error connecting to MySQL:', err);
                throw new Error('Failed to connect to the database');
            } else {
                console.log('Connected to MySQL');
                connection.release();
            }
        });
    } catch (error) {
        console.error('[mysql.connector][initializeMySqlConnector][Error]: ', error);
        throw new Error('Failed to initialize pool');
    }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) {
            initializeMySqlConnector();
        }

        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error, results) => {
                if (error) {
                    console.error('MySQL query execution failed:', error.message);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    } catch (error) {
        console.error('[my.sql.connector][execute][Error]: ', error);
        throw new Error('Failed to execute MySQL query');
    }
};
