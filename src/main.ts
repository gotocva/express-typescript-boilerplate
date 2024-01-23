import * as dotenv from 'dotenv';

// Local imports 
import app from './config/app';
import { RouteServiceProvider } from './config/router';
import { Database } from './config/db';

// const app = new App();

// Load environment variables from .env file
const env: any = dotenv.config().parsed;

const port: number | string = env?.PORT ?? 3000;

// Load route service provider
const routeServiceProvider = new RouteServiceProvider(app);

// Database instance creation
const db = new Database();

/**
 * Bootstrap function it is called on application start
 */
const bootstrap = async () => {
    await db.connect().catch(console.log);
}


app.listen(port, () => {
    bootstrap();
    console.log(`Server is running at http://localhost:${port}`);
});