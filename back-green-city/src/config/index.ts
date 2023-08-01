import dotenv from 'dotenv';
dotenv.config();
const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.MONGODB_USER,
    dbPassword: process.env.MONGODB_PASSWORD,
    dbHost: process.env.MONGODB_HOST || 'localhost',
    dbName: process.env.MONGODB_DATABASE_NAME,
    dbPort: process.env.MONGODB_PORT,
    jwtSecret: process.env.SECRET || ''
}
export default config;